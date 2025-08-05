import { PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { s3, AWS_BUCKET_NAME } from '../config/aws';

export const uploadToS3 = async (
  buffer: Buffer,
  fileName: string,
  mimeType: string
) => {
  const key = fileName;

  const command = new PutObjectCommand({
    Bucket: AWS_BUCKET_NAME,
    Key: key,
    Body: buffer,
    ContentType: mimeType
  });

  try {
    await s3.send(command);
    return `https://${AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
  } catch (err) {
    console.error('❌ Erreur upload document :', err);
    throw err;
  }
};

export const deleteFromS3 = async (fileUrl: string): Promise<void> => {
  const key = fileUrl.split('.amazonaws.com/')[1];
  if (!key) throw new Error('URL S3 invalide');

  const command = new DeleteObjectCommand({
    Bucket: AWS_BUCKET_NAME,
    Key: key,
  });

  await s3.send(command);

  console.log(`🗑️ [S3 DELETE] Deleted file: ${key}`);
};

export const getSignedS3Url = async (fileKey: string): Promise<string> => {
  const command = new GetObjectCommand({
    Bucket: AWS_BUCKET_NAME,
    Key: fileKey,
  });

  try {
    const signedUrl = await getSignedUrl(s3, command, { expiresIn: 600 }); // 10 minutes
    return signedUrl;
  } catch (err) {
    console.error('❌ Erreur génération URL signée S3 :', err);
    throw err;
  }
};

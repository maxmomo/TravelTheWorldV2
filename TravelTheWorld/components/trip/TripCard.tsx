import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';

{/* === STYLESDDDD === */ }
import { tripCardStyles } from '@/styles/components/trip/tripCard.style';
import { Ionicons } from '@expo/vector-icons';

interface TripCardProps {
    title: string;
    dateRange?: { start: string; end: string };
    onPress?: () => void;
};

const TripCard = ({ title, dateRange, onPress }: TripCardProps) => {

    return (
        <TouchableOpacity style={tripCardStyles.card} activeOpacity={0.8} onPress={onPress}>

            <TouchableOpacity style={tripCardStyles.deleteButton}>
                <Ionicons name="trash-outline" size={20} color="#FF4D4D" />
            </TouchableOpacity>

            <View style={tripCardStyles.cardHeader}>
                <Text style={tripCardStyles.cardTitle}>{title}</Text>
            </View>

            {dateRange?.start && dateRange?.end && (
                <Text style={tripCardStyles.cardDates}>
                    {moment(dateRange.start).format('DD MMM YYYY')} ➝ {moment(dateRange.end).format('DD MMM YYYY')}
                </Text>
            )}

        </TouchableOpacity>
    );
};

export default TripCard;
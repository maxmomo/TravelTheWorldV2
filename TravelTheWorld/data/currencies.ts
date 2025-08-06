const currencies = [
    {
        "code": "USD",
        "name": "US Dollar",
        "symbol": "$"
    },
    {
        "code": "CAD",
        "name": "Canadian Dollar",
        "symbol": "CA$"
    },
    {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
    },
    {
        "code": "AED",
        "name": "United Arab Emirates Dirham",
        "symbol": "AED"
    },
    {
        "code": "AFN",
        "name": "Afghan Afghani",
        "symbol": "Af"
    },
    {
        "code": "ALL",
        "name": "Albanian Lek",
        "symbol": "ALL"
    },
    {
        "code": "AMD",
        "name": "Armenian Dram",
        "symbol": "AMD"
    },
    {
        "code": "ARS",
        "name": "Argentine Peso",
        "symbol": "AR$"
    },
    {
        "code": "AUD",
        "name": "Australian Dollar",
        "symbol": "AU$"
    },
    {
        "code": "AZN",
        "name": "Azerbaijani Manat",
        "symbol": "man."
    },
    {
        "code": "BAM",
        "name": "Bosnia-Herzegovina Convertible Mark",
        "symbol": "KM"
    },
    {
        "code": "BDT",
        "name": "Bangladeshi Taka",
        "symbol": "Tk"
    },
    {
        "code": "BGN",
        "name": "Bulgarian Lev",
        "symbol": "BGN"
    },
    {
        "code": "BHD",
        "name": "Bahraini Dinar",
        "symbol": "BD"
    },
    {
        "code": "BIF",
        "name": "Burundian Franc",
        "symbol": "FBu"
    },
    {
        "code": "BND",
        "name": "Brunei Dollar",
        "symbol": "BN$"
    },
    {
        "code": "BOB",
        "name": "Bolivian Boliviano",
        "symbol": "Bs"
    },
    {
        "code": "BRL",
        "name": "Brazilian Real",
        "symbol": "R$"
    },
    {
        "code": "BWP",
        "name": "Botswanan Pula",
        "symbol": "BWP"
    },
    {
        "code": "BYN",
        "name": "Belarusian Ruble",
        "symbol": "Br"
    },
    {
        "code": "BZD",
        "name": "Belize Dollar",
        "symbol": "BZ$"
    },
    {
        "code": "CDF",
        "name": "Congolese Franc",
        "symbol": "CDF"
    },
    {
        "code": "CHF",
        "name": "Swiss Franc",
        "symbol": "CHF"
    },
    {
        "code": "CLP",
        "name": "Chilean Peso",
        "symbol": "CL$"
    },
    {
        "code": "CNY",
        "name": "Chinese Yuan",
        "symbol": "CN¥"
    },
    {
        "code": "COP",
        "name": "Colombian Peso",
        "symbol": "CO$"
    },
    {
        "code": "CRC",
        "name": "Costa Rican Colón",
        "symbol": "₡"
    },
    {
        "code": "CZK",
        "name": "Czech Republic Koruna",
        "symbol": "Kč"
    },
    {
        "code": "DKK",
        "name": "Danish Krone",
        "symbol": "Dkr"
    },
    {
        "code": "DOP",
        "name": "Dominican Peso",
        "symbol": "RD$"
    },
    {
        "code": "DZD",
        "name": "Algerian Dinar",
        "symbol": "DA"
    },
    {
        "code": "EGP",
        "name": "Egyptian Pound",
        "symbol": "EGP"
    },
    {
        "code": "ETB",
        "name": "Ethiopian Birr",
        "symbol": "Br"
    },
    {
        "code": "GBP",
        "name": "British Pound Sterling",
        "symbol": "£"
    },
    {
        "code": "GHS",
        "name": "Ghanaian Cedi",
        "symbol": "GH₵"
    },
    {
        "code": "GTQ",
        "name": "Guatemalan Quetzal",
        "symbol": "GTQ"
    },
    {
        "code": "HKD",
        "name": "Hong Kong Dollar",
        "symbol": "HK$"
    },
    {
        "code": "HNL",
        "name": "Honduran Lempira",
        "symbol": "HNL"
    },
    {
        "code": "HRK",
        "name": "Croatian Kuna",
        "symbol": "kn"
    },
    {
        "code": "HUF",
        "name": "Hungarian Forint",
        "symbol": "Ft"
    },
    {
        "code": "IDR",
        "name": "Indonesian Rupiah",
        "symbol": "Rp"
    },
    {
        "code": "ILS",
        "name": "Israeli New Sheqel",
        "symbol": "₪"
    },
    {
        "code": "INR",
        "name": "Indian Rupee",
        "symbol": "Rs"
    },
    {
        "code": "IQD",
        "name": "Iraqi Dinar",
        "symbol": "IQD"
    },
    {
        "code": "IRR",
        "name": "Iranian Rial",
        "symbol": "IRR"
    },
    {
        "code": "ISK",
        "name": "Icelandic Króna",
        "symbol": "Ikr"
    },
    {
        "code": "JMD",
        "name": "Jamaican Dollar",
        "symbol": "J$"
    },
    {
        "code": "JOD",
        "name": "Jordanian Dinar",
        "symbol": "JD"
    },
    {
        "code": "JPY",
        "name": "Japanese Yen",
        "symbol": "¥"
    },
    {
        "code": "KES",
        "name": "Kenyan Shilling",
        "symbol": "Ksh"
    },
    {
        "code": "KRW",
        "name": "South Korean Won",
        "symbol": "₩"
    },
    {
        "code": "KWD",
        "name": "Kuwaiti Dinar",
        "symbol": "KD"
    },
    {
        "code": "KZT",
        "name": "Kazakhstani Tenge",
        "symbol": "KZT"
    },
    {
        "code": "LBP",
        "name": "Lebanese Pound",
        "symbol": "L.L."
    },
    {
        "code": "LKR",
        "name": "Sri Lankan Rupee",
        "symbol": "SLRs"
    },
    {
        "code": "MAD",
        "name": "Moroccan Dirham",
        "symbol": "MAD"
    },
    {
        "code": "MDL",
        "name": "Moldovan Leu",
        "symbol": "MDL"
    },
    {
        "code": "MGA",
        "name": "Malagasy Ariary",
        "symbol": "MGA"
    },
    {
        "code": "MKD",
        "name": "Macedonian Denar",
        "symbol": "MKD"
    },
    {
        "code": "MMK",
        "name": "Myanma Kyat",
        "symbol": "MMK"
    },
    {
        "code": "MOP",
        "name": "Macanese Pataca",
        "symbol": "MOP$"
    },
    {
        "code": "MUR",
        "name": "Mauritian Rupee",
        "symbol": "MURs"
    },
    {
        "code": "MXN",
        "name": "Mexican Peso",
        "symbol": "MX$"
    },
    {
        "code": "MYR",
        "name": "Malaysian Ringgit",
        "symbol": "RM"
    },
    {
        "code": "NGN",
        "name": "Nigerian Naira",
        "symbol": "₦"
    },
    {
        "code": "NOK",
        "name": "Norwegian Krone",
        "symbol": "Nkr"
    },
    {
        "code": "NPR",
        "name": "Nepalese Rupee",
        "symbol": "NPRs"
    },
    {
        "code": "NZD",
        "name": "New Zealand Dollar",
        "symbol": "NZ$"
    },
    {
        "code": "OMR",
        "name": "Omani Rial",
        "symbol": "OMR"
    },
    {
        "code": "PEN",
        "name": "Peruvian Sol",
        "symbol": "S/."
    },
    {
        "code": "PHP",
        "name": "Philippine Peso",
        "symbol": "₱"
    },
    {
        "code": "PKR",
        "name": "Pakistani Rupee",
        "symbol": "PKRs"
    },
    {
        "code": "PLN",
        "name": "Polish Zloty",
        "symbol": "zł"
    },
    {
        "code": "QAR",
        "name": "Qatari Rial",
        "symbol": "QR"
    },
    {
        "code": "RON",
        "name": "Romanian Leu",
        "symbol": "RON"
    },
    {
        "code": "RSD",
        "name": "Serbian Dinar",
        "symbol": "din."
    },
    {
        "code": "RUB",
        "name": "Russian Ruble",
        "symbol": "₽"
    },
    {
        "code": "SAR",
        "name": "Saudi Riyal",
        "symbol": "SR"
    },
    {
        "code": "SEK",
        "name": "Swedish Krona",
        "symbol": "Skr"
    },
    {
        "code": "SGD",
        "name": "Singapore Dollar",
        "symbol": "S$"
    },
    {
        "code": "THB",
        "name": "Thai Baht",
        "symbol": "฿"
    },
    {
        "code": "TRY",
        "name": "Turkish Lira",
        "symbol": "TL"
    },
    {
        "code": "TWD",
        "name": "New Taiwan Dollar",
        "symbol": "NT$"
    },
    {
        "code": "TZS",
        "name": "Tanzanian Shilling",
        "symbol": "TSh"
    },
    {
        "code": "UAH",
        "name": "Ukrainian Hryvnia",
        "symbol": "₴"
    },
    {
        "code": "UGX",
        "name": "Ugandan Shilling",
        "symbol": "USh"
    },
    {
        "code": "UYU",
        "name": "Uruguayan Peso",
        "symbol": "$U"
    },
    {
        "code": "UZS",
        "name": "Uzbekistan Som",
        "symbol": "UZS"
    },
    {
        "code": "VND",
        "name": "Vietnamese Dong",
        "symbol": "₫"
    },
    {
        "code": "ZAR",
        "name": "South African Rand",
        "symbol": "R"
    },
    {
        "code": "ZWL",
        "name": "Zimbabwean Dollar",
        "symbol": "ZWL$"
    }
];

export default currencies;

const countries = [
  {
    "name": "Afghanistan",
    "code": "AF",
    "currency": null,
    "timezones": [
      "Asia/Kabul"
    ]
  },
  {
    "name": "Afrique du Sud",
    "code": "ZA",
    "currency": "ZAR",
    "timezones": [
      "Africa/Johannesburg"
    ]
  },
  {
    "name": "Albanie",
    "code": "AL",
    "currency": "ALL",
    "timezones": [
      "Europe/Tirane"
    ]
  },
  {
    "name": "Algérie",
    "code": "DZ",
    "currency": "DZD",
    "timezones": [
      "Africa/Algiers"
    ]
  },
  {
    "name": "Allemagne",
    "code": "DE",
    "currency": null,
    "timezones": [
      "Europe/Berlin",
      "Europe/Busingen"
    ]
  },
  {
    "name": "Andorre",
    "code": "AD",
    "currency": null,
    "timezones": [
      "Europe/Andorra"
    ]
  },
  {
    "name": "Angola",
    "code": "AO",
    "currency": null,
    "timezones": [
      "Africa/Luanda"
    ]
  },
  {
    "name": "Anguilla",
    "code": "AI",
    "currency": null,
    "timezones": [
      "America/Anguilla"
    ]
  },
  {
    "name": "Antarctique",
    "code": "AQ",
    "currency": null,
    "timezones": [
      "Antarctica/McMurdo",
      "Antarctica/Casey",
      "Antarctica/Davis",
      "Antarctica/DumontDUrville",
      "Antarctica/Mawson",
      "Antarctica/Palmer",
      "Antarctica/Rothera",
      "Antarctica/Syowa",
      "Antarctica/Troll",
      "Antarctica/Vostok"
    ]
  },
  {
    "name": "Antigua-et-Barbuda",
    "code": "AG",
    "currency": null,
    "timezones": [
      "America/Antigua"
    ]
  },
  {
    "name": "Arabie saoudite",
    "code": "SA",
    "currency": "SAR",
    "timezones": [
      "Asia/Riyadh"
    ]
  },
  {
    "name": "Argentine",
    "code": "AR",
    "currency": "ARS",
    "timezones": [
      "America/Argentina/Buenos_Aires",
      "America/Argentina/Cordoba",
      "America/Argentina/Salta",
      "America/Argentina/Jujuy",
      "America/Argentina/Tucuman",
      "America/Argentina/Catamarca",
      "America/Argentina/La_Rioja",
      "America/Argentina/San_Juan",
      "America/Argentina/Mendoza",
      "America/Argentina/San_Luis",
      "America/Argentina/Rio_Gallegos",
      "America/Argentina/Ushuaia"
    ]
  },
  {
    "name": "Arménie",
    "code": "AM",
    "currency": "AMD",
    "timezones": [
      "Asia/Yerevan"
    ]
  },
  {
    "name": "Aruba",
    "code": "AW",
    "currency": "AWG",
    "timezones": [
      "America/Aruba"
    ]
  },
  {
    "name": "Australie",
    "code": "AU",
    "currency": "AUD",
    "timezones": [
      "Australia/Lord_Howe",
      "Antarctica/Macquarie",
      "Australia/Hobart",
      "Australia/Melbourne",
      "Australia/Sydney",
      "Australia/Broken_Hill",
      "Australia/Brisbane",
      "Australia/Lindeman",
      "Australia/Adelaide",
      "Australia/Darwin",
      "Australia/Perth",
      "Australia/Eucla"
    ]
  },
  {
    "name": "Autriche",
    "code": "AT",
    "currency": null,
    "timezones": [
      "Europe/Vienna"
    ]
  },
  {
    "name": "Azerbaïdjan",
    "code": "AZ",
    "currency": null,
    "timezones": [
      "Asia/Baku"
    ]
  },
  {
    "name": "Bahamas",
    "code": "BS",
    "currency": "BSD",
    "timezones": [
      "America/Nassau"
    ]
  },
  {
    "name": "Bahreïn",
    "code": "BH",
    "currency": "BHD",
    "timezones": [
      "Asia/Bahrain"
    ]
  },
  {
    "name": "Bangladesh",
    "code": "BD",
    "currency": "BDT",
    "timezones": [
      "Asia/Dhaka"
    ]
  },
  {
    "name": "Barbade",
    "code": "BB",
    "currency": "BBD",
    "timezones": [
      "America/Barbados"
    ]
  },
  {
    "name": "Belgique",
    "code": "BE",
    "currency": null,
    "timezones": [
      "Europe/Brussels"
    ]
  },
  {
    "name": "Belize",
    "code": "BZ",
    "currency": "BZD",
    "timezones": [
      "America/Belize"
    ]
  },
  {
    "name": "Bermudes",
    "code": "BM",
    "currency": "BMD",
    "timezones": [
      "Atlantic/Bermuda"
    ]
  },
  {
    "name": "Bhoutan",
    "code": "BT",
    "currency": "BTN",
    "timezones": [
      "Asia/Thimphu"
    ]
  },
  {
    "name": "Biélorussie",
    "code": "BY",
    "currency": null,
    "timezones": [
      "Europe/Minsk"
    ]
  },
  {
    "name": "Bolivie",
    "code": "BO",
    "currency": "BOB",
    "timezones": [
      "America/La_Paz"
    ]
  },
  {
    "name": "Bosnie-Herzégovine",
    "code": "BA",
    "currency": null,
    "timezones": [
      "Europe/Sarajevo"
    ]
  },
  {
    "name": "Botswana",
    "code": "BW",
    "currency": "BWP",
    "timezones": [
      "Africa/Gaborone"
    ]
  },
  {
    "name": "Brunei",
    "code": "BN",
    "currency": "BND",
    "timezones": [
      "Asia/Brunei"
    ]
  },
  {
    "name": "Brésil",
    "code": "BR",
    "currency": null,
    "timezones": [
      "America/Noronha",
      "America/Belem",
      "America/Fortaleza",
      "America/Recife",
      "America/Araguaina",
      "America/Maceio",
      "America/Bahia",
      "America/Sao_Paulo",
      "America/Campo_Grande",
      "America/Cuiaba",
      "America/Santarem",
      "America/Porto_Velho",
      "America/Boa_Vista",
      "America/Manaus",
      "America/Eirunepe",
      "America/Rio_Branco"
    ]
  },
  {
    "name": "Bulgarie",
    "code": "BG",
    "currency": null,
    "timezones": [
      "Europe/Sofia"
    ]
  },
  {
    "name": "Burkina Faso",
    "code": "BF",
    "currency": null,
    "timezones": [
      "Africa/Ouagadougou"
    ]
  },
  {
    "name": "Burundi",
    "code": "BI",
    "currency": "BIF",
    "timezones": [
      "Africa/Bujumbura"
    ]
  },
  {
    "name": "Bénin",
    "code": "BJ",
    "currency": null,
    "timezones": [
      "Africa/Porto-Novo"
    ]
  },
  {
    "name": "Cambodge",
    "code": "KH",
    "currency": "KHR",
    "timezones": [
      "Asia/Phnom_Penh"
    ]
  },
  {
    "name": "Cameroun",
    "code": "CM",
    "currency": null,
    "timezones": [
      "Africa/Douala"
    ]
  },
  {
    "name": "Canada",
    "code": "CA",
    "currency": "CAD",
    "timezones": [
      "America/St_Johns",
      "America/Halifax",
      "America/Glace_Bay",
      "America/Moncton",
      "America/Goose_Bay",
      "America/Blanc-Sablon",
      "America/Toronto",
      "America/Iqaluit",
      "America/Atikokan",
      "America/Winnipeg",
      "America/Resolute",
      "America/Rankin_Inlet",
      "America/Regina",
      "America/Swift_Current",
      "America/Edmonton",
      "America/Cambridge_Bay",
      "America/Inuvik",
      "America/Creston",
      "America/Dawson_Creek",
      "America/Fort_Nelson",
      "America/Whitehorse",
      "America/Dawson",
      "America/Vancouver"
    ]
  },
  {
    "name": "Cap-Vert",
    "code": "CV",
    "currency": "CVE",
    "timezones": [
      "Atlantic/Cape_Verde"
    ]
  },
  {
    "name": "Chili",
    "code": "CL",
    "currency": "CLP",
    "timezones": [
      "America/Santiago",
      "America/Punta_Arenas",
      "Pacific/Easter"
    ]
  },
  {
    "name": "Chine",
    "code": "CN",
    "currency": "CNY",
    "timezones": [
      "Asia/Shanghai",
      "Asia/Urumqi"
    ]
  },
  {
    "name": "Chypre",
    "code": "CY",
    "currency": null,
    "timezones": [
      "Asia/Nicosia",
      "Asia/Famagusta"
    ]
  },
  {
    "name": "Colombie",
    "code": "CO",
    "currency": "COP",
    "timezones": [
      "America/Bogota"
    ]
  },
  {
    "name": "Comores",
    "code": "KM",
    "currency": "KMF",
    "timezones": [
      "Indian/Comoro"
    ]
  },
  {
    "name": "Congo-Brazzaville",
    "code": "CG",
    "currency": null,
    "timezones": [
      "Africa/Brazzaville"
    ]
  },
  {
    "name": "Congo-Kinshasa",
    "code": "CD",
    "currency": null,
    "timezones": [
      "Africa/Kinshasa",
      "Africa/Lubumbashi"
    ]
  },
  {
    "name": "Corée du Nord",
    "code": "KP",
    "currency": "KPW",
    "timezones": [
      "Asia/Pyongyang"
    ]
  },
  {
    "name": "Corée du Sud",
    "code": "KR",
    "currency": "KRW",
    "timezones": [
      "Asia/Seoul"
    ]
  },
  {
    "name": "Costa Rica",
    "code": "CR",
    "currency": "CRC",
    "timezones": [
      "America/Costa_Rica"
    ]
  },
  {
    "name": "Croatie",
    "code": "HR",
    "currency": "HRK",
    "timezones": [
      "Europe/Zagreb"
    ]
  },
  {
    "name": "Cuba",
    "code": "CU",
    "currency": "CUP",
    "timezones": [
      "America/Havana"
    ]
  },
  {
    "name": "Curaçao",
    "code": "CW",
    "currency": null,
    "timezones": [
      "America/Curacao"
    ]
  },
  {
    "name": "Côte d’Ivoire",
    "code": "CI",
    "currency": null,
    "timezones": [
      "Africa/Abidjan"
    ]
  },
  {
    "name": "Danemark",
    "code": "DK",
    "currency": "DKK",
    "timezones": [
      "Europe/Copenhagen"
    ]
  },
  {
    "name": "Djibouti",
    "code": "DJ",
    "currency": "DJF",
    "timezones": [
      "Africa/Djibouti"
    ]
  },
  {
    "name": "Dominique",
    "code": "DM",
    "currency": null,
    "timezones": [
      "America/Dominica"
    ]
  },
  {
    "name": "Espagne",
    "code": "ES",
    "currency": null,
    "timezones": [
      "Europe/Madrid",
      "Africa/Ceuta",
      "Atlantic/Canary"
    ]
  },
  {
    "name": "Estonie",
    "code": "EE",
    "currency": null,
    "timezones": [
      "Europe/Tallinn"
    ]
  },
  {
    "name": "Eswatini",
    "code": "SZ",
    "currency": "SZL",
    "timezones": [
      "Africa/Mbabane"
    ]
  },
  {
    "name": "Fidji",
    "code": "FJ",
    "currency": "FJD",
    "timezones": [
      "Pacific/Fiji"
    ]
  },
  {
    "name": "Finlande",
    "code": "FI",
    "currency": null,
    "timezones": [
      "Europe/Helsinki"
    ]
  },
  {
    "name": "France",
    "code": "FR",
    "currency": null,
    "timezones": [
      "Europe/Paris"
    ]
  },
  {
    "name": "Gabon",
    "code": "GA",
    "currency": null,
    "timezones": [
      "Africa/Libreville"
    ]
  },
  {
    "name": "Gambie",
    "code": "GM",
    "currency": "GMD",
    "timezones": [
      "Africa/Banjul"
    ]
  },
  {
    "name": "Ghana",
    "code": "GH",
    "currency": null,
    "timezones": [
      "Africa/Accra"
    ]
  },
  {
    "name": "Gibraltar",
    "code": "GI",
    "currency": "GIP",
    "timezones": [
      "Europe/Gibraltar"
    ]
  },
  {
    "name": "Grenade",
    "code": "GD",
    "currency": null,
    "timezones": [
      "America/Grenada"
    ]
  },
  {
    "name": "Groenland",
    "code": "GL",
    "currency": null,
    "timezones": [
      "America/Nuuk",
      "America/Danmarkshavn",
      "America/Scoresbysund",
      "America/Thule"
    ]
  },
  {
    "name": "Grèce",
    "code": "GR",
    "currency": null,
    "timezones": [
      "Europe/Athens"
    ]
  },
  {
    "name": "Guadeloupe",
    "code": "GP",
    "currency": null,
    "timezones": [
      "America/Guadeloupe"
    ]
  },
  {
    "name": "Guam",
    "code": "GU",
    "currency": null,
    "timezones": [
      "Pacific/Guam"
    ]
  },
  {
    "name": "Guatemala",
    "code": "GT",
    "currency": "GTQ",
    "timezones": [
      "America/Guatemala"
    ]
  },
  {
    "name": "Guernesey",
    "code": "GG",
    "currency": null,
    "timezones": [
      "Europe/Guernsey"
    ]
  },
  {
    "name": "Guinée",
    "code": "GN",
    "currency": "GNF",
    "timezones": [
      "Africa/Conakry"
    ]
  },
  {
    "name": "Guinée équatoriale",
    "code": "GQ",
    "currency": null,
    "timezones": [
      "Africa/Malabo"
    ]
  },
  {
    "name": "Guinée-Bissau",
    "code": "GW",
    "currency": null,
    "timezones": [
      "Africa/Bissau"
    ]
  },
  {
    "name": "Guyana",
    "code": "GY",
    "currency": "GYD",
    "timezones": [
      "America/Guyana"
    ]
  },
  {
    "name": "Guyane française",
    "code": "GF",
    "currency": null,
    "timezones": [
      "America/Cayenne"
    ]
  },
  {
    "name": "Géorgie",
    "code": "GE",
    "currency": null,
    "timezones": [
      "Asia/Tbilisi"
    ]
  },
  {
    "name": "Géorgie du Sud-et-les Îles Sandwich du Sud",
    "code": "GS",
    "currency": null,
    "timezones": [
      "Atlantic/South_Georgia"
    ]
  },
  {
    "name": "Haïti",
    "code": "HT",
    "currency": "HTG",
    "timezones": [
      "America/Port-au-Prince"
    ]
  },
  {
    "name": "Honduras",
    "code": "HN",
    "currency": "HNL",
    "timezones": [
      "America/Tegucigalpa"
    ]
  },
  {
    "name": "Hongrie",
    "code": "HU",
    "currency": "HUF",
    "timezones": [
      "Europe/Budapest"
    ]
  },
  {
    "name": "Inde",
    "code": "IN",
    "currency": "INR",
    "timezones": [
      "Asia/Kolkata"
    ]
  },
  {
    "name": "Indonésie",
    "code": "ID",
    "currency": "IDR",
    "timezones": [
      "Asia/Jakarta",
      "Asia/Pontianak",
      "Asia/Makassar",
      "Asia/Jayapura"
    ]
  },
  {
    "name": "Irak",
    "code": "IQ",
    "currency": "IQD",
    "timezones": [
      "Asia/Baghdad"
    ]
  },
  {
    "name": "Iran",
    "code": "IR",
    "currency": "IRR",
    "timezones": [
      "Asia/Tehran"
    ]
  },
  {
    "name": "Irlande",
    "code": "IE",
    "currency": null,
    "timezones": [
      "Europe/Dublin"
    ]
  },
  {
    "name": "Islande",
    "code": "IS",
    "currency": "ISK",
    "timezones": [
      "Atlantic/Reykjavik"
    ]
  },
  {
    "name": "Israël",
    "code": "IL",
    "currency": "ILS",
    "timezones": [
      "Asia/Jerusalem"
    ]
  },
  {
    "name": "Italie",
    "code": "IT",
    "currency": null,
    "timezones": [
      "Europe/Rome"
    ]
  },
  {
    "name": "Jamaïque",
    "code": "JM",
    "currency": "JMD",
    "timezones": [
      "America/Jamaica"
    ]
  },
  {
    "name": "Japon",
    "code": "JP",
    "currency": "JPY",
    "timezones": [
      "Asia/Tokyo"
    ]
  },
  {
    "name": "Jersey",
    "code": "JE",
    "currency": null,
    "timezones": [
      "Europe/Jersey"
    ]
  },
  {
    "name": "Jordanie",
    "code": "JO",
    "currency": "JOD",
    "timezones": [
      "Asia/Amman"
    ]
  },
  {
    "name": "Kazakhstan",
    "code": "KZ",
    "currency": "KZT",
    "timezones": [
      "Asia/Almaty",
      "Asia/Qyzylorda",
      "Asia/Qostanay",
      "Asia/Aqtobe",
      "Asia/Aqtau",
      "Asia/Atyrau",
      "Asia/Oral"
    ]
  },
  {
    "name": "Kenya",
    "code": "KE",
    "currency": "KES",
    "timezones": [
      "Africa/Nairobi"
    ]
  },
  {
    "name": "Kirghizstan",
    "code": "KG",
    "currency": "KGS",
    "timezones": [
      "Asia/Bishkek"
    ]
  },
  {
    "name": "Kiribati",
    "code": "KI",
    "currency": null,
    "timezones": [
      "Pacific/Tarawa",
      "Pacific/Kanton",
      "Pacific/Kiritimati"
    ]
  },
  {
    "name": "Koweït",
    "code": "KW",
    "currency": "KWD",
    "timezones": [
      "Asia/Kuwait"
    ]
  },
  {
    "name": "La Réunion",
    "code": "RE",
    "currency": null,
    "timezones": [
      "Indian/Reunion"
    ]
  },
  {
    "name": "Laos",
    "code": "LA",
    "currency": "LAK",
    "timezones": [
      "Asia/Vientiane"
    ]
  },
  {
    "name": "Lesotho",
    "code": "LS",
    "currency": "LSL",
    "timezones": [
      "Africa/Maseru"
    ]
  },
  {
    "name": "Lettonie",
    "code": "LV",
    "currency": null,
    "timezones": [
      "Europe/Riga"
    ]
  },
  {
    "name": "Liban",
    "code": "LB",
    "currency": "LBP",
    "timezones": [
      "Asia/Beirut"
    ]
  },
  {
    "name": "Liberia",
    "code": "LR",
    "currency": "LRD",
    "timezones": [
      "Africa/Monrovia"
    ]
  },
  {
    "name": "Libye",
    "code": "LY",
    "currency": "LYD",
    "timezones": [
      "Africa/Tripoli"
    ]
  },
  {
    "name": "Liechtenstein",
    "code": "LI",
    "currency": null,
    "timezones": [
      "Europe/Vaduz"
    ]
  },
  {
    "name": "Lituanie",
    "code": "LT",
    "currency": null,
    "timezones": [
      "Europe/Vilnius"
    ]
  },
  {
    "name": "Luxembourg",
    "code": "LU",
    "currency": null,
    "timezones": [
      "Europe/Luxembourg"
    ]
  },
  {
    "name": "Macédoine du Nord",
    "code": "MK",
    "currency": "MKD",
    "timezones": [
      "Europe/Skopje"
    ]
  },
  {
    "name": "Madagascar",
    "code": "MG",
    "currency": null,
    "timezones": [
      "Indian/Antananarivo"
    ]
  },
  {
    "name": "Malaisie",
    "code": "MY",
    "currency": "MYR",
    "timezones": [
      "Asia/Kuala_Lumpur",
      "Asia/Kuching"
    ]
  },
  {
    "name": "Malawi",
    "code": "MW",
    "currency": "MWK",
    "timezones": [
      "Africa/Blantyre"
    ]
  },
  {
    "name": "Maldives",
    "code": "MV",
    "currency": "MVR",
    "timezones": [
      "Indian/Maldives"
    ]
  },
  {
    "name": "Mali",
    "code": "ML",
    "currency": null,
    "timezones": [
      "Africa/Bamako"
    ]
  },
  {
    "name": "Malte",
    "code": "MT",
    "currency": null,
    "timezones": [
      "Europe/Malta"
    ]
  },
  {
    "name": "Maroc",
    "code": "MA",
    "currency": "MAD",
    "timezones": [
      "Africa/Casablanca"
    ]
  },
  {
    "name": "Martinique",
    "code": "MQ",
    "currency": null,
    "timezones": [
      "America/Martinique"
    ]
  },
  {
    "name": "Maurice",
    "code": "MU",
    "currency": "MUR",
    "timezones": [
      "Indian/Mauritius"
    ]
  },
  {
    "name": "Mauritanie",
    "code": "MR",
    "currency": "MRO",
    "timezones": [
      "Africa/Nouakchott"
    ]
  },
  {
    "name": "Mayotte",
    "code": "YT",
    "currency": null,
    "timezones": [
      "Indian/Mayotte"
    ]
  },
  {
    "name": "Mexique",
    "code": "MX",
    "currency": "MXN",
    "timezones": [
      "America/Mexico_City",
      "America/Cancun",
      "America/Merida",
      "America/Monterrey",
      "America/Matamoros",
      "America/Chihuahua",
      "America/Ciudad_Juarez",
      "America/Ojinaga",
      "America/Mazatlan",
      "America/Bahia_Banderas",
      "America/Hermosillo",
      "America/Tijuana"
    ]
  },
  {
    "name": "Micronésie",
    "code": "FM",
    "currency": null,
    "timezones": [
      "Pacific/Chuuk",
      "Pacific/Pohnpei",
      "Pacific/Kosrae"
    ]
  },
  {
    "name": "Moldavie",
    "code": "MD",
    "currency": "MDL",
    "timezones": [
      "Europe/Chisinau"
    ]
  },
  {
    "name": "Monaco",
    "code": "MC",
    "currency": null,
    "timezones": [
      "Europe/Monaco"
    ]
  },
  {
    "name": "Mongolie",
    "code": "MN",
    "currency": "MNT",
    "timezones": [
      "Asia/Ulaanbaatar",
      "Asia/Hovd"
    ]
  },
  {
    "name": "Montserrat",
    "code": "MS",
    "currency": null,
    "timezones": [
      "America/Montserrat"
    ]
  },
  {
    "name": "Monténégro",
    "code": "ME",
    "currency": null,
    "timezones": [
      "Europe/Podgorica"
    ]
  },
  {
    "name": "Mozambique",
    "code": "MZ",
    "currency": null,
    "timezones": [
      "Africa/Maputo"
    ]
  },
  {
    "name": "Myanmar (Birmanie)",
    "code": "MM",
    "currency": "MMK",
    "timezones": [
      "Asia/Yangon"
    ]
  },
  {
    "name": "Namibie",
    "code": "NA",
    "currency": "NAD",
    "timezones": [
      "Africa/Windhoek"
    ]
  },
  {
    "name": "Nauru",
    "code": "NR",
    "currency": null,
    "timezones": [
      "Pacific/Nauru"
    ]
  },
  {
    "name": "Nicaragua",
    "code": "NI",
    "currency": "NIO",
    "timezones": [
      "America/Managua"
    ]
  },
  {
    "name": "Niger",
    "code": "NE",
    "currency": null,
    "timezones": [
      "Africa/Niamey"
    ]
  },
  {
    "name": "Nigeria",
    "code": "NG",
    "currency": "NGN",
    "timezones": [
      "Africa/Lagos"
    ]
  },
  {
    "name": "Niue",
    "code": "NU",
    "currency": null,
    "timezones": [
      "Pacific/Niue"
    ]
  },
  {
    "name": "Norvège",
    "code": "NO",
    "currency": "NOK",
    "timezones": [
      "Europe/Oslo"
    ]
  },
  {
    "name": "Nouvelle-Calédonie",
    "code": "NC",
    "currency": null,
    "timezones": [
      "Pacific/Noumea"
    ]
  },
  {
    "name": "Nouvelle-Zélande",
    "code": "NZ",
    "currency": "NZD",
    "timezones": [
      "Pacific/Auckland",
      "Pacific/Chatham"
    ]
  },
  {
    "name": "Népal",
    "code": "NP",
    "currency": "NPR",
    "timezones": [
      "Asia/Kathmandu"
    ]
  },
  {
    "name": "Oman",
    "code": "OM",
    "currency": "OMR",
    "timezones": [
      "Asia/Muscat"
    ]
  },
  {
    "name": "Ouganda",
    "code": "UG",
    "currency": "UGX",
    "timezones": [
      "Africa/Kampala"
    ]
  },
  {
    "name": "Ouzbékistan",
    "code": "UZ",
    "currency": "UZS",
    "timezones": [
      "Asia/Samarkand",
      "Asia/Tashkent"
    ]
  },
  {
    "name": "Pakistan",
    "code": "PK",
    "currency": "PKR",
    "timezones": [
      "Asia/Karachi"
    ]
  },
  {
    "name": "Palaos",
    "code": "PW",
    "currency": null,
    "timezones": [
      "Pacific/Palau"
    ]
  },
  {
    "name": "Panama",
    "code": "PA",
    "currency": null,
    "timezones": [
      "America/Panama"
    ]
  },
  {
    "name": "Papouasie-Nouvelle-Guinée",
    "code": "PG",
    "currency": "PGK",
    "timezones": [
      "Pacific/Port_Moresby",
      "Pacific/Bougainville"
    ]
  },
  {
    "name": "Paraguay",
    "code": "PY",
    "currency": "PYG",
    "timezones": [
      "America/Asuncion"
    ]
  },
  {
    "name": "Pays-Bas",
    "code": "NL",
    "currency": null,
    "timezones": [
      "Europe/Amsterdam"
    ]
  },
  {
    "name": "Pays-Bas caribéens",
    "code": "BQ",
    "currency": null,
    "timezones": [
      "America/Kralendijk"
    ]
  },
  {
    "name": "Philippines",
    "code": "PH",
    "currency": "PHP",
    "timezones": [
      "Asia/Manila"
    ]
  },
  {
    "name": "Pologne",
    "code": "PL",
    "currency": null,
    "timezones": [
      "Europe/Warsaw"
    ]
  },
  {
    "name": "Polynésie française",
    "code": "PF",
    "currency": null,
    "timezones": [
      "Pacific/Tahiti",
      "Pacific/Marquesas",
      "Pacific/Gambier"
    ]
  },
  {
    "name": "Porto Rico",
    "code": "PR",
    "currency": null,
    "timezones": [
      "America/Puerto_Rico"
    ]
  },
  {
    "name": "Portugal",
    "code": "PT",
    "currency": null,
    "timezones": [
      "Europe/Lisbon",
      "Atlantic/Madeira",
      "Atlantic/Azores"
    ]
  },
  {
    "name": "Pérou",
    "code": "PE",
    "currency": "PEN",
    "timezones": [
      "America/Lima"
    ]
  },
  {
    "name": "Qatar",
    "code": "QA",
    "currency": "QAR",
    "timezones": [
      "Asia/Qatar"
    ]
  },
  {
    "name": "R.A.S. chinoise de Hong Kong",
    "code": "HK",
    "currency": "HKD",
    "timezones": [
      "Asia/Hong_Kong"
    ]
  },
  {
    "name": "R.A.S. chinoise de Macao",
    "code": "MO",
    "currency": "MOP",
    "timezones": [
      "Asia/Macau"
    ]
  },
  {
    "name": "Roumanie",
    "code": "RO",
    "currency": null,
    "timezones": [
      "Europe/Bucharest"
    ]
  },
  {
    "name": "Royaume-Uni",
    "code": "GB",
    "currency": "GBP",
    "timezones": [
      "Europe/London"
    ]
  },
  {
    "name": "Russie",
    "code": "RU",
    "currency": "RUB",
    "timezones": [
      "Europe/Kaliningrad",
      "Europe/Moscow",
      "Europe/Kirov",
      "Europe/Volgograd",
      "Europe/Astrakhan",
      "Europe/Saratov",
      "Europe/Ulyanovsk",
      "Europe/Samara",
      "Asia/Yekaterinburg",
      "Asia/Omsk",
      "Asia/Novosibirsk",
      "Asia/Barnaul",
      "Asia/Tomsk",
      "Asia/Novokuznetsk",
      "Asia/Krasnoyarsk",
      "Asia/Irkutsk",
      "Asia/Chita",
      "Asia/Yakutsk",
      "Asia/Khandyga",
      "Asia/Vladivostok",
      "Asia/Ust-Nera",
      "Asia/Magadan",
      "Asia/Sakhalin",
      "Asia/Srednekolymsk",
      "Asia/Kamchatka",
      "Asia/Anadyr"
    ]
  },
  {
    "name": "Rwanda",
    "code": "RW",
    "currency": "RWF",
    "timezones": [
      "Africa/Kigali"
    ]
  },
  {
    "name": "République centrafricaine",
    "code": "CF",
    "currency": null,
    "timezones": [
      "Africa/Bangui"
    ]
  },
  {
    "name": "République dominicaine",
    "code": "DO",
    "currency": "DOP",
    "timezones": [
      "America/Santo_Domingo"
    ]
  },
  {
    "name": "Sahara occidental",
    "code": "EH",
    "currency": null,
    "timezones": [
      "Africa/El_Aaiun"
    ]
  },
  {
    "name": "Saint-Barthélemy",
    "code": "BL",
    "currency": null,
    "timezones": [
      "America/St_Barthelemy"
    ]
  },
  {
    "name": "Saint-Christophe-et-Niévès",
    "code": "KN",
    "currency": null,
    "timezones": [
      "America/St_Kitts"
    ]
  },
  {
    "name": "Saint-Marin",
    "code": "SM",
    "currency": null,
    "timezones": [
      "Europe/San_Marino"
    ]
  },
  {
    "name": "Saint-Martin",
    "code": "MF",
    "currency": null,
    "timezones": [
      "America/Marigot"
    ]
  },
  {
    "name": "Saint-Martin (partie néerlandaise)",
    "code": "SX",
    "currency": null,
    "timezones": [
      "America/Lower_Princes"
    ]
  },
  {
    "name": "Saint-Pierre-et-Miquelon",
    "code": "PM",
    "currency": null,
    "timezones": [
      "America/Miquelon"
    ]
  },
  {
    "name": "Saint-Vincent-et-les Grenadines",
    "code": "VC",
    "currency": null,
    "timezones": [
      "America/St_Vincent"
    ]
  },
  {
    "name": "Sainte-Hélène",
    "code": "SH",
    "currency": "SHP",
    "timezones": [
      "Atlantic/St_Helena"
    ]
  },
  {
    "name": "Sainte-Lucie",
    "code": "LC",
    "currency": null,
    "timezones": [
      "America/St_Lucia"
    ]
  },
  {
    "name": "Salvador",
    "code": "SV",
    "currency": "SVC",
    "timezones": [
      "America/El_Salvador"
    ]
  },
  {
    "name": "Samoa",
    "code": "WS",
    "currency": "WST",
    "timezones": [
      "Pacific/Apia"
    ]
  },
  {
    "name": "Samoa américaines",
    "code": "AS",
    "currency": null,
    "timezones": [
      "Pacific/Pago_Pago"
    ]
  },
  {
    "name": "Sao Tomé-et-Principe",
    "code": "ST",
    "currency": "STD",
    "timezones": [
      "Africa/Sao_Tome"
    ]
  },
  {
    "name": "Serbie",
    "code": "RS",
    "currency": null,
    "timezones": [
      "Europe/Belgrade"
    ]
  },
  {
    "name": "Seychelles",
    "code": "SC",
    "currency": "SCR",
    "timezones": [
      "Indian/Mahe"
    ]
  },
  {
    "name": "Sierra Leone",
    "code": "SL",
    "currency": "SLL",
    "timezones": [
      "Africa/Freetown"
    ]
  },
  {
    "name": "Singapour",
    "code": "SG",
    "currency": "SGD",
    "timezones": [
      "Asia/Singapore"
    ]
  },
  {
    "name": "Slovaquie",
    "code": "SK",
    "currency": null,
    "timezones": [
      "Europe/Bratislava"
    ]
  },
  {
    "name": "Slovénie",
    "code": "SI",
    "currency": null,
    "timezones": [
      "Europe/Ljubljana"
    ]
  },
  {
    "name": "Somalie",
    "code": "SO",
    "currency": "SOS",
    "timezones": [
      "Africa/Mogadishu"
    ]
  },
  {
    "name": "Soudan",
    "code": "SD",
    "currency": null,
    "timezones": [
      "Africa/Khartoum"
    ]
  },
  {
    "name": "Soudan du Sud",
    "code": "SS",
    "currency": "SSP",
    "timezones": [
      "Africa/Juba"
    ]
  },
  {
    "name": "Sri Lanka",
    "code": "LK",
    "currency": "LKR",
    "timezones": [
      "Asia/Colombo"
    ]
  },
  {
    "name": "Suisse",
    "code": "CH",
    "currency": "CHF",
    "timezones": [
      "Europe/Zurich"
    ]
  },
  {
    "name": "Suriname",
    "code": "SR",
    "currency": null,
    "timezones": [
      "America/Paramaribo"
    ]
  },
  {
    "name": "Suède",
    "code": "SE",
    "currency": "SEK",
    "timezones": [
      "Europe/Stockholm"
    ]
  },
  {
    "name": "Svalbard et Jan Mayen",
    "code": "SJ",
    "currency": null,
    "timezones": [
      "Arctic/Longyearbyen"
    ]
  },
  {
    "name": "Syrie",
    "code": "SY",
    "currency": "SYP",
    "timezones": [
      "Asia/Damascus"
    ]
  },
  {
    "name": "Sénégal",
    "code": "SN",
    "currency": null,
    "timezones": [
      "Africa/Dakar"
    ]
  },
  {
    "name": "Tadjikistan",
    "code": "TJ",
    "currency": null,
    "timezones": [
      "Asia/Dushanbe"
    ]
  },
  {
    "name": "Tanzanie",
    "code": "TZ",
    "currency": "TZS",
    "timezones": [
      "Africa/Dar_es_Salaam"
    ]
  },
  {
    "name": "Taïwan",
    "code": "TW",
    "currency": null,
    "timezones": [
      "Asia/Taipei"
    ]
  },
  {
    "name": "Tchad",
    "code": "TD",
    "currency": null,
    "timezones": [
      "Africa/Ndjamena"
    ]
  },
  {
    "name": "Tchéquie",
    "code": "CZ",
    "currency": "CZK",
    "timezones": [
      "Europe/Prague"
    ]
  },
  {
    "name": "Terres australes françaises",
    "code": "TF",
    "currency": null,
    "timezones": [
      "Indian/Kerguelen"
    ]
  },
  {
    "name": "Territoire britannique de l’océan Indien",
    "code": "IO",
    "currency": null,
    "timezones": [
      "Indian/Chagos"
    ]
  },
  {
    "name": "Territoires palestiniens",
    "code": "PS",
    "currency": null,
    "timezones": [
      "Asia/Gaza",
      "Asia/Hebron"
    ]
  },
  {
    "name": "Thaïlande",
    "code": "TH",
    "currency": "THB",
    "timezones": [
      "Asia/Bangkok"
    ]
  },
  {
    "name": "Timor oriental",
    "code": "TL",
    "currency": null,
    "timezones": [
      "Asia/Dili"
    ]
  },
  {
    "name": "Togo",
    "code": "TG",
    "currency": null,
    "timezones": [
      "Africa/Lome"
    ]
  },
  {
    "name": "Tokelau",
    "code": "TK",
    "currency": null,
    "timezones": [
      "Pacific/Fakaofo"
    ]
  },
  {
    "name": "Tonga",
    "code": "TO",
    "currency": "TOP",
    "timezones": [
      "Pacific/Tongatapu"
    ]
  },
  {
    "name": "Trinité-et-Tobago",
    "code": "TT",
    "currency": "TTD",
    "timezones": [
      "America/Port_of_Spain"
    ]
  },
  {
    "name": "Tunisie",
    "code": "TN",
    "currency": "TND",
    "timezones": [
      "Africa/Tunis"
    ]
  },
  {
    "name": "Turkménistan",
    "code": "TM",
    "currency": null,
    "timezones": [
      "Asia/Ashgabat"
    ]
  },
  {
    "name": "Turquie",
    "code": "TR",
    "currency": null,
    "timezones": [
      "Europe/Istanbul"
    ]
  },
  {
    "name": "Tuvalu",
    "code": "TV",
    "currency": null,
    "timezones": [
      "Pacific/Funafuti"
    ]
  },
  {
    "name": "Ukraine",
    "code": "UA",
    "currency": null,
    "timezones": [
      "Europe/Simferopol",
      "Europe/Kyiv"
    ]
  },
  {
    "name": "Uruguay",
    "code": "UY",
    "currency": "UYU",
    "timezones": [
      "America/Montevideo"
    ]
  },
  {
    "name": "Vanuatu",
    "code": "VU",
    "currency": "VUV",
    "timezones": [
      "Pacific/Efate"
    ]
  },
  {
    "name": "Venezuela",
    "code": "VE",
    "currency": null,
    "timezones": [
      "America/Caracas"
    ]
  },
  {
    "name": "Viêt Nam",
    "code": "VN",
    "currency": "VND",
    "timezones": [
      "Asia/Ho_Chi_Minh"
    ]
  },
  {
    "name": "Wallis-et-Futuna",
    "code": "WF",
    "currency": null,
    "timezones": [
      "Pacific/Wallis"
    ]
  },
  {
    "name": "Yémen",
    "code": "YE",
    "currency": null,
    "timezones": [
      "Asia/Aden"
    ]
  },
  {
    "name": "Zambie",
    "code": "ZM",
    "currency": null,
    "timezones": [
      "Africa/Lusaka"
    ]
  },
  {
    "name": "Zimbabwe",
    "code": "ZW",
    "currency": null,
    "timezones": [
      "Africa/Harare"
    ]
  },
  {
    "name": "Égypte",
    "code": "EG",
    "currency": "EGP",
    "timezones": [
      "Africa/Cairo"
    ]
  },
  {
    "name": "Émirats arabes unis",
    "code": "AE",
    "currency": "AED",
    "timezones": [
      "Asia/Dubai"
    ]
  },
  {
    "name": "Équateur",
    "code": "EC",
    "currency": null,
    "timezones": [
      "America/Guayaquil",
      "Pacific/Galapagos"
    ]
  },
  {
    "name": "Érythrée",
    "code": "ER",
    "currency": "ERN",
    "timezones": [
      "Africa/Asmara"
    ]
  },
  {
    "name": "État de la Cité du Vatican",
    "code": "VA",
    "currency": null,
    "timezones": [
      "Europe/Vatican"
    ]
  },
  {
    "name": "États-Unis",
    "code": "US",
    "currency": "USD",
    "timezones": [
      "America/New_York",
      "America/Detroit",
      "America/Kentucky/Louisville",
      "America/Kentucky/Monticello",
      "America/Indiana/Indianapolis",
      "America/Indiana/Vincennes",
      "America/Indiana/Winamac",
      "America/Indiana/Marengo",
      "America/Indiana/Petersburg",
      "America/Indiana/Vevay",
      "America/Chicago",
      "America/Indiana/Tell_City",
      "America/Indiana/Knox",
      "America/Menominee",
      "America/North_Dakota/Center",
      "America/North_Dakota/New_Salem",
      "America/North_Dakota/Beulah",
      "America/Denver",
      "America/Boise",
      "America/Phoenix",
      "America/Los_Angeles",
      "America/Anchorage",
      "America/Juneau",
      "America/Sitka",
      "America/Metlakatla",
      "America/Yakutat",
      "America/Nome",
      "America/Adak",
      "Pacific/Honolulu"
    ]
  },
  {
    "name": "Éthiopie",
    "code": "ET",
    "currency": null,
    "timezones": [
      "Africa/Addis_Ababa"
    ]
  },
  {
    "name": "Île Bouvet",
    "code": "BV",
    "currency": null,
    "timezones": []
  },
  {
    "name": "Île Christmas",
    "code": "CX",
    "currency": null,
    "timezones": [
      "Indian/Christmas"
    ]
  },
  {
    "name": "Île Norfolk",
    "code": "NF",
    "currency": null,
    "timezones": [
      "Pacific/Norfolk"
    ]
  },
  {
    "name": "Île de Man",
    "code": "IM",
    "currency": null,
    "timezones": [
      "Europe/Isle_of_Man"
    ]
  },
  {
    "name": "Îles Caïmans",
    "code": "KY",
    "currency": "KYD",
    "timezones": [
      "America/Cayman"
    ]
  },
  {
    "name": "Îles Cocos",
    "code": "CC",
    "currency": null,
    "timezones": [
      "Indian/Cocos"
    ]
  },
  {
    "name": "Îles Cook",
    "code": "CK",
    "currency": null,
    "timezones": [
      "Pacific/Rarotonga"
    ]
  },
  {
    "name": "Îles Féroé",
    "code": "FO",
    "currency": null,
    "timezones": [
      "Atlantic/Faroe"
    ]
  },
  {
    "name": "Îles Heard-et-MacDonald",
    "code": "HM",
    "currency": null,
    "timezones": []
  },
  {
    "name": "Îles Malouines",
    "code": "FK",
    "currency": "FKP",
    "timezones": [
      "Atlantic/Stanley"
    ]
  },
  {
    "name": "Îles Mariannes du Nord",
    "code": "MP",
    "currency": null,
    "timezones": [
      "Pacific/Saipan"
    ]
  },
  {
    "name": "Îles Marshall",
    "code": "MH",
    "currency": null,
    "timezones": [
      "Pacific/Majuro",
      "Pacific/Kwajalein"
    ]
  },
  {
    "name": "Îles Pitcairn",
    "code": "PN",
    "currency": null,
    "timezones": [
      "Pacific/Pitcairn"
    ]
  },
  {
    "name": "Îles Salomon",
    "code": "SB",
    "currency": "SBD",
    "timezones": [
      "Pacific/Guadalcanal"
    ]
  },
  {
    "name": "Îles Turques-et-Caïques",
    "code": "TC",
    "currency": null,
    "timezones": [
      "America/Grand_Turk"
    ]
  },
  {
    "name": "Îles Vierges britanniques",
    "code": "VG",
    "currency": null,
    "timezones": [
      "America/Tortola"
    ]
  },
  {
    "name": "Îles Vierges des États-Unis",
    "code": "VI",
    "currency": null,
    "timezones": [
      "America/St_Thomas"
    ]
  },
  {
    "name": "Îles mineures éloignées des États-Unis",
    "code": "UM",
    "currency": null,
    "timezones": [
      "Pacific/Midway",
      "Pacific/Wake"
    ]
  },
  {
    "name": "Îles Åland",
    "code": "AX",
    "currency": null,
    "timezones": [
      "Europe/Mariehamn"
    ]
  }
];

export default countries;  
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      boxShadow: {
        DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.02)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.02)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.01)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.01)"
      },
      colors: {
        gray: colors.slate,
        "light-blue": colors.sky,
        red: colors.rose,
        transparent: "transparent",
        current: "currentColor",

        black: colors.black,
        white: colors.white,
        yellow: colors.amber,
        green: colors.emerald,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.violet,
        pink: colors.pink,
        "cds-black": "#000000",
        "cds-white": "#ffffff",
        "cds-green-0050": "#eefce3",
        "cds-green-0100": "#d0f6b1",
        "cds-green-0200": "#acf075",
        "cds-green-0300": "#86e935",
        "cds-green-0400": "#71dc18",
        "cds-green-0500": "#67ca16",
        "cds-green-0600": "#57aa13",
        "cds-green-0700": "#42810e",
        "cds-green-0800": "#366a0c",
        "cds-green-0900": "#284e09",
        "cds-green-1000": "#1c3706",
        "cds-blue-0050": "#e5f7ff",
        "cds-blue-0100": "#bdebff",
        "cds-blue-0200": "#8fddff",
        "cds-blue-0300": "#66d1ff",
        "cds-blue-0400": "#2ec0ff",
        "cds-blue-0500": "#00abf5",
        "cds-blue-0600": "#009adb",
        "cds-blue-0700": "#0079ad",
        "cds-blue-0800": "#00608a",
        "cds-blue-0900": "#004b6b",
        "cds-blue-1000": "#00364d",
        "cds-violet-0050": "#faf0ff",
        "cds-violet-0100": "#efd6fa",
        "cds-violet-0200": "#e0b4f3",
        "cds-violet-0300": "#ce91e8",
        "cds-violet-0400": "#bb70db",
        "cds-violet-0500": "#ac50d3",
        "cds-violet-0600": "#9b32c8",
        "cds-violet-0700": "#7c12a5",
        "cds-violet-0800": "#5d0085",
        "cds-violet-0900": "#440061",
        "cds-violet-1000": "#320047",
        "cds-red-0050": "#fff2f0",
        "cds-red-0100": "#ffe5e0",
        "cds-red-0200": "#ffcbc2",
        "cds-red-0300": "#ffa494",
        "cds-red-0400": "#ff816b",
        "cds-red-0500": "#ff674d",
        "cds-red-0600": "#ff5233",
        "cds-red-0700": "#e02200",
        "cds-red-0800": "#c21d00",
        "cds-red-0900": "#8f1500",
        "cds-red-1000": "#701100",
        "cds-ochre-0050": "#fff9eb",
        "cds-ochre-0100": "#fff2d6",
        "cds-ochre-0200": "#ffe8b8",
        "cds-ochre-0300": "#ffdb8f",
        "cds-ochre-0400": "#ffcf66",
        "cds-ochre-0500": "#ffb92e",
        "cds-ochre-0600": "#ffa600",
        "cds-ochre-0700": "#d68800",
        "cds-ochre-0800": "#a36500",
        "cds-ochre-0900": "#8a5300",
        "cds-ochre-1000": "#613900",
        "cds-lavender-0050": "#ebebff",
        "cds-lavender-0100": "#cfd0f2",
        "cds-lavender-0200": "#adafe6",
        "cds-lavender-0300": "#8b8dda",
        "cds-lavender-0400": "#6e72d8",
        "cds-lavender-0500": "#5559d3",
        "cds-lavender-0600": "#3b40ce",
        "cds-lavender-0700": "#2429c2",
        "cds-lavender-0800": "#0005a3",
        "cds-lavender-0900": "#000470",
        "cds-lavender-1000": "#000247",
        "cds-azure-0050": "#e5f2ff",
        "cds-azure-0100": "#c2dfff",
        "cds-azure-0200": "#9ecdff",
        "cds-azure-0300": "#66b0ff",
        "cds-azure-0400": "#3d9bff",
        "cds-azure-0500": "#1486ff",
        "cds-azure-0600": "#0071eb",
        "cds-azure-0700": "#005bbd",
        "cds-azure-0800": "#004085",
        "cds-azure-0900": "#002c5c",
        "cds-azure-1000": "#002347",
        "cds-aqua-0050": "#ebfeff",
        "cds-aqua-0100": "#b8faff",
        "cds-aqua-0200": "#80f7ff",
        "cds-aqua-0300": "#3df2ff",
        "cds-aqua-0400": "#00e4f5",
        "cds-aqua-0500": "#00cddb",
        "cds-aqua-0600": "#00a2ad",
        "cds-aqua-0700": "#007780",
        "cds-aqua-0800": "#00565c",
        "cds-aqua-0900": "#003e42",
        "cds-aqua-1000": "#003033",
        "cds-jade-0050": "#e8fdf6",
        "cds-jade-0100": "#c7f9e9",
        "cds-jade-0200": "#9bf3d5",
        "cds-jade-0300": "#68e3ba",
        "cds-jade-0400": "#34daa3",
        "cds-jade-0500": "#29bc8b",
        "cds-jade-0600": "#1c9b71",
        "cds-jade-0700": "#1c7d5d",
        "cds-jade-0800": "#006b47",
        "cds-jade-0900": "#105b42",
        "cds-jade-1000": "#0f523c",
        "cds-yellow-0050": "#fffbe5",
        "cds-yellow-0100": "#fff1ad",
        "cds-yellow-0200": "#ffe875",
        "cds-yellow-0300": "#ffda24",
        "cds-yellow-0400": "#ffc60a",
        "cds-yellow-0500": "#f0b000",
        "cds-yellow-0600": "#d69600",
        "cds-yellow-0700": "#b37700",
        "cds-yellow-0800": "#855800",
        "cds-yellow-0900": "#5c3d00",
        "cds-yellow-1000": "#422c00",
        "cds-tangerine-0050": "#fff0e5",
        "cds-tangerine-0100": "#ffdbc2",
        "cds-tangerine-0200": "#fcbe92",
        "cds-tangerine-0300": "#ffac70",
        "cds-tangerine-0400": "#ff8e3d",
        "cds-tangerine-0500": "#f56600",
        "cds-tangerine-0600": "#d15700",
        "cds-tangerine-0700": "#ad4800",
        "cds-tangerine-0800": "#803500",
        "cds-tangerine-0900": "#612800",
        "cds-tangerine-1000": "#4d2000",
        "cds-magenta-0050": "#ffe5ec",
        "cds-magenta-0100": "#ffbdcd",
        "cds-magenta-0200": "#ff94af",
        "cds-magenta-0300": "#ff668c",
        "cds-magenta-0400": "#ff386a",
        "cds-magenta-0500": "#e7184c",
        "cds-magenta-0600": "#bb113c",
        "cds-magenta-0700": "#97072b",
        "cds-magenta-0800": "#7a001f",
        "cds-magenta-0900": "#610018",
        "cds-magenta-1000": "#4d0013",
        "cds-pink-0050": "#fff0f9",
        "cds-pink-0100": "#fed2ec",
        "cds-pink-0200": "#f7a6d7",
        "cds-pink-0300": "#ee77be",
        "cds-pink-0400": "#ea53ad",
        "cds-pink-0500": "#d23292",
        "cds-pink-0600": "#b31473",
        "cds-pink-0700": "#99005c",
        "cds-pink-0800": "#7a0049",
        "cds-pink-0900": "#5c0037",
        "cds-pink-1000": "#4d002e",
        "cds-warm-gray-0050": "#f7f7f8",
        "cds-warm-gray-0100": "#ebeaeb",
        "cds-warm-gray-0200": "#d7d5d7",
        "cds-warm-gray-0300": "#bdbbbf",
        "cds-warm-gray-0400": "#a29ea3",
        "cds-warm-gray-0500": "#8b868d",
        "cds-warm-gray-0600": "#6f6a71",
        "cds-warm-gray-0700": "#5a575c",
        "cds-warm-gray-0800": "#48454a",
        "cds-warm-gray-0900": "#343135",
        "cds-warm-gray-1000": "#242325",
        "cds-slate-0050": "#f3f3f7",
        "cds-slate-0100": "#e3e4ed",
        "cds-slate-0200": "#c8c9da",
        "cds-slate-0300": "#acadc8",
        "cds-slate-0400": "#8e8fb4",
        "cds-slate-0500": "#7577a9",
        "cds-slate-0600": "#5f619b",
        "cds-slate-0700": "#46487c",
        "cds-slate-0800": "#35375f",
        "cds-slate-0900": "#282948",
        "cds-slate-1000": "#1a1a2e",
        "cds-ice-0050": "#f0f7ff",
        "cds-ice-0100": "#d7e5f4",
        "cds-ice-0200": "#b5cee8",
        "cds-ice-0300": "#8db1d8",
        "cds-ice-0400": "#719dcc",
        "cds-ice-0500": "#4f85bf",
        "cds-ice-0600": "#316eaf",
        "cds-ice-0700": "#1b5593",
        "cds-ice-0800": "#154374",
        "cds-ice-0900": "#003166",
        "cds-ice-1000": "#002347",
        "cds-cool-gray-0050": "#f3f5f7",
        "cds-cool-gray-0100": "#e0e5eb",
        "cds-cool-gray-0200": "#c5ced8",
        "cds-cool-gray-0300": "#a9b7c6",
        "cds-cool-gray-0400": "#889baf",
        "cds-cool-gray-0500": "#6f869f",
        "cds-cool-gray-0600": "#5a6f87",
        "cds-cool-gray-0700": "#475b71",
        "cds-cool-gray-0800": "#32475d",
        "cds-cool-gray-0900": "#22374f",
        "cds-cool-gray-1000": "#0d233a",
        "cds-tan-0050": "#f7f6f2",
        "cds-tan-0100": "#edeae3",
        "cds-tan-0200": "#ddd6c5",
        "cds-tan-0300": "#c0b49b",
        "cds-tan-0400": "#ad9d7b",
        "cds-tan-0500": "#908160",
        "cds-tan-0600": "#7a6d52",
        "cds-tan-0700": "#625841",
        "cds-tan-0800": "#524833",
        "cds-tan-0900": "#423a29",
        "cds-tan-1000": "#322c20",
        "cds-construction-0050": "#f1f6f8",
        "cds-construction-0100": "#e3eaed",
        "cds-construction-0200": "#cbd4d8",
        "cds-construction-0300": "#aeb8bc",
        "cds-construction-0400": "#859399",
        "cds-construction-0500": "#6a7a81",
        "cds-construction-0600": "#4f6169",
        "cds-construction-0700": "#3a4d55",
        "cds-construction-0800": "#2d4048",
        "cds-construction-0900": "#21333b",
        "cds-construction-1000": "#1b2b32",
        "cds-gray-0000": "#ffffff",
        "cds-gray-0050": "#fafafa",
        "cds-gray-0100": "#f2f2f2",
        "cds-gray-0200": "#e8e8e8",
        "cds-gray-0300": "#dedede",
        "cds-gray-0400": "#cccccc",
        "cds-gray-0500": "#b3b3b3",
        "cds-gray-0600": "#8c8c8c",
        "cds-gray-0700": "#666666",
        "cds-gray-0800": "#454545",
        "cds-gray-0900": "#333333",
        "cds-gray-1000": "#000000",
        "clr-gray-0000": "#FFFFFF",
        "clr-gray-0050": "#FAFAFA",
        "clr-gray-0100": "#F2F2F2",
        "clr-gray-0200": "#E8E8E8",
        "clr-gray-0300": "#DEDEDE",
        "clr-gray-0400": "#CCCCCC",
        "clr-gray-0500": "#B3B3B3",
        "clr-gray-0600": "#8C8C8C",
        "clr-gray-0700": "#666666",
        "clr-gray-0800": "#454545",
        "clr-gray-0900": "#333333",
        "clr-gray-1000": "#000000",
        "clr-blue-0050": "#E3F5FC",
        "clr-blue-0100": "#C8EAF9",
        "clr-blue-0200": "#9BD8F3",
        "clr-blue-0300": "#79C6E6",
        "clr-blue-0400": "#49AEDA",
        "clr-blue-0500": "#179BD3",
        "clr-blue-0600": "#0072A3",
        "clr-blue-0700": "#00648F",
        "clr-blue-0800": "#00567A",
        "clr-blue-0900": "#004B6B",
        "clr-blue-1000": "#00364D",
        "clr-purple-0050": "#F7E5FF",
        "clr-purple-0100": "#E6CAF1",
        "clr-purple-0200": "#D2AAE4",
        "clr-purple-0300": "#C090D5",
        "clr-purple-0400": "#AF73C9",
        "clr-purple-0500": "#9E57BC",
        "clr-purple-0600": "#8A39AC",
        "clr-purple-0700": "#781D9F",
        "clr-purple-0800": "#680094",
        "clr-purple-0900": "#4F0070",
        "clr-purple-1000": "#320047",
        "clr-red-0050": "#FFF2F0",
        "clr-red-0100": "#FEDDD7",
        "clr-red-0200": "#FCC5BB",
        "clr-red-0300": "#F59E8F",
        "clr-red-0400": "#F27963",
        "clr-red-0500": "#F35E44",
        "clr-red-0600": "#F52D0A",
        "clr-red-0700": "#DB2100",
        "clr-red-0800": "#C21D00",
        "clr-red-0900": "#991700",
        "clr-red-1000": "#660F00",
        "clr-yellow-0050": "#FFFAE5",
        "clr-yellow-0100": "#FFF4C7",
        "clr-yellow-0200": "#FFEEA8",
        "clr-yellow-0300": "#FEE272",
        "clr-yellow-0400": "#F8CF2A",
        "clr-yellow-0500": "#EFC006",
        "clr-yellow-0600": "#E6B000",
        "clr-yellow-0700": "#D69A00",
        "clr-yellow-0800": "#B87D00",
        "clr-yellow-0900": "#8F5A00",
        "clr-yellow-1000": "#613200",
        "clr-green-0050": "#DFF0D0",
        "clr-green-0100": "#BCE49A",
        "clr-green-0200": "#73DC1E",
        "clr-green-0300": "#68C71A",
        "clr-green-0400": "#5EB715",
        "clr-green-0500": "#5AA220",
        "clr-green-0600": "#4B970C",
        "clr-green-0700": "#3C8500",
        "clr-green-0800": "#306B00",
        "clr-green-0900": "#255200",
        "clr-green-1000": "#1E4200",
        "bs-white": "#fff",
        "bs-gray-100": "#f8f9fa",
        "bs-gray-200": "#e9ecef",
        "bs-gray-300": "#dee2e6",
        "bs-gray-400": "#ced4da",
        "bs-gray-500": "#adb5bd",
        "bs-gray-600": "#6c757d",
        "bs-gray-700": "#495057",
        "bs-gray-800": "#343a40",
        "bs-gray-900": "#212529",
        "bs-black": "#000",
        "bs-blue": "#0d6efd",
        "bs-indigo": "#6610f2",
        "bs-purple": "#6f42c1",
        "bs-pink": "#d63384",
        "bs-red": "#dc3545",
        "bs-orange": "#fd7e14",
        "bs-yellow": "#ffc107",
        "bs-green": "#198754",
        "bs-teal": "#20c997",
        "bs-cyan": "#0dcaf0",
        "bs-blue-050": "#f3f8ff",
        "bs-blue-100": "#e7f1ff",
        "bs-blue-200": "#c3dbff",
        "bs-blue-300": "#9ec5fe",
        "bs-blue-400": "#569afe",
        "bs-blue-500": "#0d6efd",
        "bs-blue-600": "#0c63e4",
        "bs-blue-700": "#0a53be",
        "bs-blue-800": "#084298",
        "bs-blue-900": "#06367c",
        "bs-indigo-050": "#f7f3fe",
        "bs-indigo-100": "#f0e7fe",
        "bs-indigo-200": "#d9c3fc",
        "bs-indigo-300": "#c29ffa",
        "bs-indigo-400": "#9458f6",
        "bs-indigo-500": "#6610f2",
        "bs-indigo-600": "#5c0eda",
        "bs-indigo-700": "#4d0cb6",
        "bs-indigo-800": "#3d0a91",
        "bs-indigo-900": "#320877",
        "bs-purple-050": "#f8f6fc",
        "bs-purple-100": "#f1ecf9",
        "bs-purple-200": "#dbd0f0",
        "bs-purple-300": "#c5b3e6",
        "bs-purple-400": "#9a7bd4",
        "bs-purple-500": "#6f42c1",
        "bs-purple-600": "#643bae",
        "bs-purple-700": "#533291",
        "bs-purple-800": "#432874",
        "bs-purple-900": "#36205f",
        "bs-pink-050": "#fdf5f9",
        "bs-pink-100": "#fbebf3",
        "bs-pink-200": "#f5cce0",
        "bs-pink-300": "#efadce",
        "bs-pink-400": "#e270a9",
        "bs-pink-500": "#d63384",
        "bs-pink-600": "#c12e77",
        "bs-pink-700": "#a12663",
        "bs-pink-800": "#801f4f",
        "bs-pink-900": "#691941",
        "bs-red-050": "#fdf5f6",
        "bs-red-100": "#fcebec",
        "bs-red-200": "#f6cdd1",
        "bs-red-300": "#f1aeb5",
        "bs-red-400": "#e7727d",
        "bs-red-500": "#dc3545",
        "bs-red-600": "#c6303e",
        "bs-red-700": "#a52834",
        "bs-red-800": "#842029",
        "bs-red-900": "#6c1a22",
        "bs-orange-050": "#fff9f3",
        "bs-orange-100": "#fff2e8",
        "bs-orange-200": "#ffdfc4",
        "bs-orange-300": "#fecba1",
        "bs-orange-400": "#fea55b",
        "bs-orange-500": "#fd7e14",
        "bs-orange-600": "#e47112",
        "bs-orange-700": "#be5f0f",
        "bs-orange-800": "#984c0c",
        "bs-orange-900": "#7c3e0a",
        "bs-yellow-050": "#fffcf3",
        "bs-yellow-100": "#fff9e6",
        "bs-yellow-200": "#fff0c1",
        "bs-yellow-300": "#ffe69c",
        "bs-yellow-400": "#ffd451",
        "bs-yellow-500": "#ffc107",
        "bs-yellow-600": "#e6ae06",
        "bs-yellow-700": "#bf9105",
        "bs-yellow-800": "#997404",
        "bs-yellow-900": "#7d5f03",
        "bs-green-050": "#f4f9f6",
        "bs-green-100": "#e8f3ee",
        "bs-green-200": "#c6e1d4",
        "bs-green-300": "#a3cfbb",
        "bs-green-400": "#5eab87",
        "bs-green-500": "#198754",
        "bs-green-600": "#177a4c",
        "bs-green-700": "#13653f",
        "bs-green-800": "#0f5132",
        "bs-green-900": "#0c4229",
        "bs-teal-050": "#f4fcfa",
        "bs-teal-100": "#e9faf5",
        "bs-teal-200": "#c7f2e5",
        "bs-teal-300": "#a6e9d5",
        "bs-teal-400": "#63d9b6",
        "bs-teal-500": "#20c997",
        "bs-teal-600": "#1db588",
        "bs-teal-700": "#189771",
        "bs-teal-800": "#13795b",
        "bs-teal-900": "#10624a",
        "bs-cyan-050": "#f3fcfe",
        "bs-cyan-100": "#e7fafe",
        "bs-cyan-200": "#c3f2fb",
        "bs-cyan-300": "#9eeaf9",
        "bs-cyan-400": "#56daf5",
        "bs-cyan-500": "#0dcaf0",
        "bs-cyan-600": "#0cb6d8",
        "bs-cyan-700": "#0a98b4",
        "bs-cyan-800": "#087990",
        "bs-cyan-900": "#066376",
        "color-blue": "#1283da",
        "color-indigo": "#6610f2",
        "color-purple": "#7c39ed",
        "color-pink": "#e929ba",
        "color-red": "#e52e4d",
        "color-orange": "#f7653b",
        "color-yellow": "#df8d00",
        "color-green": "#11af22",
        "color-teal": "#02a9a4",
        "color-cyan": "#01a9da",
        "color-gray": "#6c757d",
        "color-gray-dark": "#343a40",
        "color-primary": "#1283da",
        "color-secondary": "#6c757d",
        "color-success": "#11af22",
        "color-info": "#7c39ed",
        "color-warning": "#df8d00",
        "color-danger": "#e52e4d",
        "color-light": "#f0f2f4",
        "color-dark": "#343a40",
        "color-white": "#fff",
        "material-black": "#000000",
        "material-white": "#FFFFFF",
        "material-red-050": "#FFEBEE",
        "material-red-100": "#FFCDD2",
        "material-red-200": "#EF9A9A",
        "material-red-300": "#E57373",
        "material-red-400": "#EF5350",
        "material-red-500": "#F44336",
        "material-red-600": "#E53935",
        "material-red-700": "#D32F2F",
        "material-red-800": "#C62828",
        "material-red-900": "#B71C1C",
        "material-pink-050": "#FCE4EC",
        "material-pink-100": "#F8BBD0",
        "material-pink-200": "#F48FB1",
        "material-pink-300": "#F06292",
        "material-pink-400": "#EC407A",
        "material-pink-500": "#E91E63",
        "material-pink-600": "#D81B60",
        "material-pink-700": "#C2185B",
        "material-pink-800": "#AD1457",
        "material-pink-900": "#880E4F",
        "material-purple-050": "#F3E5F5",
        "material-purple-100": "#E1BEE7",
        "material-purple-200": "#CE93D8",
        "material-purple-300": "#BA68C8",
        "material-purple-400": "#AB47BC",
        "material-purple-500": "#9C27B0",
        "material-purple-600": "#8E24AA",
        "material-purple-700": "#7B1FA2",
        "material-purple-800": "#6A1B9A",
        "material-purple-900": "#4A148C",
        "material-deep-purple-050": "#EDE7F6",
        "material-deep-purple-100": "#D1C4E9",
        "material-deep-purple-200": "#B39DDB",
        "material-deep-purple-300": "#9575CD",
        "material-deep-purple-400": "#7E57C2",
        "material-deep-purple-500": "#673AB7",
        "material-deep-purple-600": "#5E35B1",
        "material-deep-purple-700": "#512DA8",
        "material-deep-purple-800": "#4527A0",
        "material-deep-purple-900": "#311B92",
        "material-indigo-050": "#E8EAF6",
        "material-indigo-100": "#C5CAE9",
        "material-indigo-200": "#9FA8DA",
        "material-indigo-300": "#7986CB",
        "material-indigo-400": "#5C6BC0",
        "material-indigo-500": "#3F51B5",
        "material-indigo-600": "#3949AB",
        "material-indigo-700": "#303F9F",
        "material-indigo-800": "#283593",
        "material-indigo-900": "#1A237E",
        "material-blue-050": "#E3F2FD",
        "material-blue-100": "#BBDEFB",
        "material-blue-200": "#90CAF9",
        "material-blue-300": "#64B5F6",
        "material-blue-400": "#42A5F5",
        "material-blue-500": "#2196F3",
        "material-blue-600": "#1E88E5",
        "material-blue-700": "#1976D2",
        "material-blue-800": "#1565C0",
        "material-blue-900": "#0D47A1",
        "material-light-blue-050": "#E1F5FE",
        "material-light-blue-100": "#B3E5FC",
        "material-light-blue-200": "#81D4FA",
        "material-light-blue-300": "#4FC3F7",
        "material-light-blue-400": "#29B6F6",
        "material-light-blue-500": "#03A9F4",
        "material-light-blue-600": "#039BE5",
        "material-light-blue-700": "#0288D1",
        "material-light-blue-800": "#0277BD",
        "material-light-blue-900": "#01579B",
        "material-cyan-050": "#E0F7FA",
        "material-cyan-100": "#B2EBF2",
        "material-cyan-200": "#80DEEA",
        "material-cyan-300": "#4DD0E1",
        "material-cyan-400": "#26C6DA",
        "material-cyan-500": "#00BCD4",
        "material-cyan-600": "#00ACC1",
        "material-cyan-700": "#0097A7",
        "material-cyan-800": "#00838F",
        "material-cyan-900": "#006064",
        "material-teal-050": "#E0F2F1",
        "material-teal-100": "#B2DFDB",
        "material-teal-200": "#80CBC4",
        "material-teal-300": "#4DB6AC",
        "material-teal-400": "#26A69A",
        "material-teal-500": "#009688",
        "material-teal-600": "#00897B",
        "material-teal-700": "#00796B",
        "material-teal-800": "#00695C",
        "material-teal-900": "#004D40",
        "material-green-050": "#E8F5E9",
        "material-green-100": "#C8E6C9",
        "material-green-200": "#A5D6A7",
        "material-green-300": "#81C784",
        "material-green-400": "#66BB6A",
        "material-green-500": "#4CAF50",
        "material-green-600": "#43A047",
        "material-green-700": "#388E3C",
        "material-green-800": "#2E7D32",
        "material-green-900": "#1B5E20",
        "material-light-green-050": "#F1F8E9",
        "material-light-green-100": "#DCEDC8",
        "material-light-green-200": "#C5E1A5",
        "material-light-green-300": "#AED581",
        "material-light-green-400": "#9CCC65",
        "material-light-green-500": "#8BC34A",
        "material-light-green-600": "#7CB342",
        "material-light-green-700": "#689F38",
        "material-light-green-800": "#558B2F",
        "material-light-green-900": "#33691E",
        "material-lime-050": "#F9FBE7",
        "material-lime-100": "#F0F4C3",
        "material-lime-200": "#E6EE9C",
        "material-lime-300": "#DCE775",
        "material-lime-400": "#D4E157",
        "material-lime-500": "#CDDC39",
        "material-lime-600": "#C0CA33",
        "material-lime-700": "#AFB42B",
        "material-lime-800": "#9E9D24",
        "material-lime-900": "#827717",
        "material-yellow-050": "#FFFDE7",
        "material-yellow-100": "#FFF9C4",
        "material-yellow-200": "#FFF59D",
        "material-yellow-300": "#FFF176",
        "material-yellow-400": "#FFEE58",
        "material-yellow-500": "#FFEB3B",
        "material-yellow-600": "#FDD835",
        "material-yellow-700": "#FBC02D",
        "material-yellow-800": "#F9A825",
        "material-yellow-900": "#F57F17",
        "material-amber-050": "#FFF8E1",
        "material-amber-100": "#FFECB3",
        "material-amber-200": "#FFE082",
        "material-amber-300": "#FFD54F",
        "material-amber-400": "#FFCA28",
        "material-amber-500": "#FFC107",
        "material-amber-600": "#FFB300",
        "material-amber-700": "#FFA000",
        "material-amber-800": "#FF8F00",
        "material-amber-900": "#FF6F00",
        "material-orange-050": "#FFF3E0",
        "material-orange-100": "#FFE0B2",
        "material-orange-200": "#FFCC80",
        "material-orange-300": "#FFB74D",
        "material-orange-400": "#FFA726",
        "material-orange-500": "#FF9800",
        "material-orange-600": "#FB8C00",
        "material-orange-700": "#F57C00",
        "material-orange-800": "#EF6C00",
        "material-orange-900": "#E65100",
        "material-deep-orange-050": "#FBE9E7",
        "material-deep-orange-100": "#FFCCBC",
        "material-deep-orange-200": "#FFAB91",
        "material-deep-orange-300": "#FF8A65",
        "material-deep-orange-400": "#FF7043",
        "material-deep-orange-500": "#FF5722",
        "material-deep-orange-600": "#F4511E",
        "material-deep-orange-700": "#E64A19",
        "material-deep-orange-800": "#D84315",
        "material-deep-orange-900": "#BF360C",
        "material-brown-050": "#EFEBE9",
        "material-brown-100": "#D7CCC8",
        "material-brown-200": "#BCAAA4",
        "material-brown-300": "#A1887F",
        "material-brown-400": "#8D6E63",
        "material-brown-500": "#795548",
        "material-brown-600": "#6D4C41",
        "material-brown-700": "#5D4037",
        "material-brown-800": "#4E342E",
        "material-brown-900": "#3E2723",
        "material-gray-050": "#FAFAFA",
        "material-gray-100": "#F5F5F5",
        "material-gray-200": "#EEEEEE",
        "material-gray-300": "#E0E0E0",
        "material-gray-400": "#BDBDBD",
        "material-gray-500": "#9E9E9E",
        "material-gray-600": "#757575",
        "material-gray-700": "#616161",
        "material-gray-800": "#424242",
        "material-gray-900": "#212121",
        "material-blue-gray-050": "#ECEFF1",
        "material-blue-gray-100": "#CFD8DC",
        "material-blue-gray-200": "#B0BEC5",
        "material-blue-gray-300": "#90A4AE",
        "material-blue-gray-400": "#78909C",
        "material-blue-gray-500": "#607D8B",
        "material-blue-gray-600": "#546E7A",
        "material-blue-gray-700": "#455A64",
        "material-blue-gray-800": "#37474F",
        "material-blue-gray-900": "#263238",
        "material-red-A100": "#FF8A80",
        "material-red-A200": "#FF5252",
        "material-red-A400": "#FF1744",
        "material-red-A700": "#D50000",
        "material-pink-A100": "#FF80AB",
        "material-pink-A200": "#FF4081",
        "material-pink-A400": "#F50057",
        "material-pink-A700": "#C51162",
        "material-purple-A100": "#EA80FC",
        "material-purple-A200": "#E040FB",
        "material-purple-A400": "#D500F9",
        "material-purple-A700": "#AA00FF",
        "material-deep-purple-A100": "#B388FF",
        "material-deep-purple-A200": "#7C4DFF",
        "material-deep-purple-A400": "#651FFF",
        "material-deep-purple-A700": "#6200EA",
        "material-indigo-A100": "#8C9EFF",
        "material-indigo-A200": "#536DFE",
        "material-indigo-A400": "#3D5AFE",
        "material-indigo-A700": "#304FFE",
        "material-blue-A100": "#82B1FF",
        "material-blue-A200": "#448AFF",
        "material-blue-A400": "#2979FF",
        "material-blue-A700": "#2962FF",
        "material-light-blue-A100": "#80D8FF",
        "material-light-blue-A200": "#40C4FF",
        "material-light-blue-A400": "#00B0FF",
        "material-light-blue-A700": "#0091EA",
        "material-cyan-A100": "#84FFFF",
        "material-cyan-A200": "#18FFFF",
        "material-cyan-A400": "#00E5FF",
        "material-cyan-A700": "#00B8D4",
        "material-teal-A100": "#A7FFEB",
        "material-teal-A200": "#64FFDA",
        "material-teal-A400": "#1DE9B6",
        "material-teal-A700": "#00BFA5",
        "material-green-A100": "#B9F6CA",
        "material-green-A200": "#69F0AE",
        "material-green-A400": "#00E676",
        "material-green-A700": "#00C853",
        "material-light-green-A100": "#CCFF90",
        "material-light-green-A200": "#B2FF59",
        "material-light-green-A400": "#76FF03",
        "material-light-green-A700": "#64DD17",
        "material-lime-A100": "#F4FF81",
        "material-lime-A200": "#EEFF41",
        "material-lime-A400": "#C6FF00",
        "material-lime-A700": "#AEEA00",
        "material-yellow-A100": "#FFFF8D",
        "material-yellow-A200": "#FFFF00",
        "material-yellow-A400": "#FFEA00",
        "material-yellow-A700": "#FFD600",
        "material-amber-A100": "#FFE57F",
        "material-amber-A200": "#FFD740",
        "material-amber-A400": "#FFC400",
        "material-amber-A700": "#FFAB00",
        "material-orange-A100": "#FFD180",
        "material-orange-A200": "#FFAB40",
        "material-orange-A400": "#FF9100",
        "material-orange-A700": "#FF6D00",
        "material-deep-orange-A100": "#FF9E80",
        "material-deep-orange-A200": "#FF6E40",
        "material-deep-orange-A400": "#FF3D00",
        "material-deep-orange-A700": "#DD2C00"
      },
      outline: {
        blue: "2px solid rgba(0, 112, 244, 0.5)"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        kaushian: ["Kaushan Script"]
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        "2xl": ["1.5rem", { lineHeight: "1.33", letterSpacing: "-0.01em" }],
        "3xl": ["1.88rem", { lineHeight: "1.33", letterSpacing: "-0.01em" }],
        "4xl": ["2.25rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        "5xl": ["3rem", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
        "6xl": ["3.75rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }]
      },
      screens: {
        xs: "480px"
      },
      borderWidth: {
        3: "3px"
      },
      minWidth: {
        36: "9rem",
        44: "11rem",
        56: "14rem",
        60: "15rem",
        72: "18rem",
        80: "20rem"
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem"
      },
      zIndex: {
        60: "60"
      }
    }
  },
  plugins: [
    // eslint-disable-next-line global-require
    require("@tailwindcss/forms"),
    // add custom variant for expanding sidebar
    plugin(({ addVariant, e }) => {
      addVariant("sidebar-expanded", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`);
      });
    })
  ]
};

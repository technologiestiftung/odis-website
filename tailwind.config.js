/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{liquid,html}"],
  theme: {
    
    colors: {
      red: {
        "500": "#E60032"
      }, 

      blue: { 
        "100": "#91A6E8",
        "500": "#1E398F",
        "900": "#0C163B" 
      },

      cyan: { 
        "50": "#FDFEFF",
        "100": "#EDF8FE",
      },

      grey: {
        "500": "#9FA3B2"
      },
    
    },

    fontFamily: {
      clanProMedium: [ 
        "Clan Medium",
        "ui-sans-serif",
      ],

      clanProMediumitalic: [ 
        "Clan Mediumitalic",
        "ui-sans-serif",
      ],

      clanProBold: [ 
        "Clan Bold",
        "ui-sans-serif",
      ],

      clanProBolditalic: [ 
        "Clan Bolditalic",
        "ui-sans-serif",
      ],

      clanProBook: [ 
        "Clan Book",
        "ui-sans-serif",
      ],

      clanProBookitalic: [ 
        "Clan Bookitalic",
        "ui-sans-serif",
      ],

      clanProNews: [ 
        "Clan News",
        "ui-sans-serif",
      ],

      clanProNewsitalic: [ 
        "Clan Newsitalic",
        "ui-sans-serif",
      ],
    },
    
  
    extend: {},
  },

  plugins: [],
};

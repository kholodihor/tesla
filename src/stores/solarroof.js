import { defineStore } from 'pinia'

export const useSolarRoofStore = defineStore({
  id: 'solarroof',
  state() {
    return {
      intro: {
        image: 'https://i.redd.it/kgl4kiyi4qaa1.jpg',
        title: 'Solar Roof',
        subtitle: 'Transform your roof and produce clean energy',
        characteristics: [
          {
            number: '☀️',
            desc: 'Convert Sunlight to Energy'
          },
          {
            number: '25 Years',
            desc: 'Tile Warranty '
          },
          {
            number: '24/7',
            desc: 'Energy monitoring'
          }
        ]
      },
      beautiful: {
        image:
          'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Solar-Roof-Design-Desktop-Global',
        title: 'A Beautiful Roof',
        subtitle: 'Design',
        text: 'Install Solar Roof and power your home with a fully integrated solar and storage system. With a seamless design, each tile looks great up-close or from the street, complementing your home’s natural aesthetic styling. Chat with an energy advisor to ask any questions about going solar with Tesla.  '
      },
      backup: {
        image:
          'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/solar-roof-protection-outage-01-desktop.jpg',
        title: 'Backup Protection',
        subtitle: 'Energy Storage',
        text: 'Powerwall is a compact home battery that is bundled with every Tesla solar purchase, providing you with 24/7 energy security. It stores the energy you produce with Solar Roof, so you can power your home anytime—at night or during an outage.  '
      },
      durability: {
        video:
          'https://www.tesla.com/sites/default/files/solarroof/v3/durability/SR-Durability-Desktop.mp4',
        title: 'Build to Last',
        subtitle: 'Durability',
        text: 'Solar Roof tiles are durable, strong and engineered for all-weather protection. With a 25-year warranty, Solar Roof tiles will continue to produce clean energy for your home for decades to come. '
      },
      installation: [
        {
          mainTitle: 'Trusted Expertise',
          mainText:
            'Our in-house team of energy professionals has installed more than 3.6 GW of clean solar energy across 400,000 roofs—the equivalent of 10 million traditional solar panels. From design to power on, we take care of everything. Chat with an energy advisor to ask any questions about Tesla Solar Roof.  ',
          video:
            'https://www.tesla.com/sites/default/files/solarroof/v3/installation/Carousel_Design.mp4',
          title: 'Design',
          text: 'Active guidance from off-ramp to on-ramp'
        },
        {
          mainTitle: 'Trusted Expertise',
          mainText:
            'Our in-house team of energy professionals has installed more than 3.6 GW of clean solar energy across 400,000 roofs—the equivalent of 10 million traditional solar panels. From design to power on, we take care of everything. Chat with an energy advisor to ask any questions about Tesla Solar Roof. ',

          video:
            'https://www.tesla.com/sites/default/files/solarroof/v3/installation/Carousel_Installation2.mp4',

          title: 'Installation',
          text: 'Automatically change lanes while driving on the highway'
        },
        {
          mainTitle: 'Trusted Expertise',
          mainText:
            'Our in-house team of energy professionals has installed more than 3.6 GW of clean solar energy across 400,000 roofs—the equivalent of 10 million traditional solar panels. From design to power on, we take care of everything. Chat with an energy advisor to ask any questions about Tesla Solar Roof.  ',
          video:
            'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/solar-roof-installation-carousel-03-desktop.mp4',
          title: 'Power On',
          text: 'Automatically retrieve your car'
        }
      ],
      efficiency: {
        image: 'https://www.tesla.com/sites/default/files/solarpanels/inverter/Inverter_V8_D.jpg',
        title: 'Maximum Solar Production',
        subtitle: 'Efficiency',
        text: 'Tesla solar panels are designed to be highly efficient, delivering maximum solar production year-round, even on roofs with complicated angles. Powered by Tesla Solar Inverter, your fully integrated system is safe and reliable. '
      },
      monitoring: {
        image:
          'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/solar-roof-monitor-optimize-desktop',
        title: '24/7 Monitoring',
        subtitle: 'Experience',
        text: 'Manage your solar system from anywhere in the world with 24/7 mobile monitoring. Watch your energy in real time or set your preferences to optimize for energy independence. '
      },
      payless: {
        image:
          'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/maximum-solar-production-desktop',
        title: 'Pay Less for Electricity',
        subtitle: 'Value',
        text: 'Solar Roof is the only roof that can help pay for itself with the energy you produce. Power your home at the lowest price per watt of any national provider and take control of your monthly electricity bill.'
      },
      specs: [
        {
          tab: 'Solar Roof',
          image:
            'https://www.tesla.com/sites/default/files/solarroof/specs/PanelMeasure_desktop2x.png',
          specs: [
            {
              desc: 'Tile and Power Warranty',
              number: '25 years'
            },
            {
              desc: 'Wind Rating',
              number: 'ASTM D3161 Class F'
            },
            {
              desc: 'Fire Rating',
              number: 'Class A (highest rating)'
            },
            {
              desc: 'Hail Rating',
              number: 'ANSI FM 4473 Class 3'
            },
            {
              desc: 'Roof Pitch',
              number: '2:12 to 24:12'
            },
            {
              desc: 'Inverter Power',
              number: '3.8kW / 7.6kW 97.5% efficiency'
            }
          ]
        }
      ]
    }
  }
})

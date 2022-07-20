import { defineStore } from 'pinia';

export const useSolarPanelsStore = defineStore({
  id: 'solarpanels',
  state() {
    return {
      intro: {
        image:
          'https://tesla-cdn.thron.com/delivery/public/image/tesla/45992f1c-a33a-4a04-b1f0-338aff182f8e/bvlatuR/std/2880x1800/_25-Hero-D',
        title: 'Solar for Existing Roofs ',
        subtitle: 'Lowest Cost Solar Panels in America Money-back guarantee ',
        characteristics: [
          {
            number: '☀️',
            desc: 'Convert Sunlight to Energy',
          },
          {
            number: '$',
            desc: 'Guaranteed Lowest Price for Solar ',
          },
          {
            number: '24/7',
            desc: 'Energy monitoring',
          },
        ],
      },
      videoSection: {
        video:
          'https://tesla-cdn.thron.com/delivery/public/video/tesla/1e3dd39b-49f4-43ff-895a-74fa93dddfdf/bvlatuR/WEBHD/_25-Savings-D',
        title: 'Electricity for Less',
        subtitle: 'Savings',
        text: 'Use solar energy to power your home and reduce your dependence on the grid. Purchase solar at the lowest price of any national provider with Teslas price match guarantee and take control of your monthly electricibill. Learn more about your potential savings in our Design Studio. ',
      },
      imageSection: {
        image: 'solarpanel.png',
        title: 'Sleek and Durable',
        subtitle: 'Design',
        text: 'Our solar panels are low-profile and durable — quietly converting sunlight to energy for decades to come. Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimalist aesthetic. Chat with an energy advisor or request a call to ask any questions about Tesla solar panels.',
      },
      backup: {
        image:
          'https://tesla-cdn.thron.com/delivery/public/image/tesla/173055ff-afe2-4114-947e-ba62cf8e05c6/bvlatuR/std/2880x1800/PW-Inverter-Hero-D',
        title: 'Home Battery Backup',
        subtitle: 'Powerwall',
        text: 'Powerwall is bundled with every Tesla solar purchase, allowing you to store your solar energy for use anytime—at night or during an outage. ',
      },
      order: {
        image:
          'https://cms.qz.com/wp-content/uploads/2017/04/section-hero-march2x-e1491840334437.jpg?quality=75&strip=all&w=1600&h=900&crop=1',
        title: 'Order and Installation',
        subtitle: 'Power On',
        text: 'From permitting to powering on, we’ll take care of everything. After you order, we’ll gather remote aerial imagery of your home, design your system, take care of any necessary permits and schedule your installation. Chat with an energy advisor to ask any questions about going solar with Tesla.  ',
      },
      efficiency: {
        image:
          'https://www.tesla.com/sites/default/files/solarpanels/inverter/Inverter_V8_D.jpg',
        title: 'Maximum Solar Production',
        subtitle: 'Efficiency',
        text: 'Tesla solar panels are designed to be highly efficient, delivering maximum solar production year-round, even on roofs with complicated angles. Powered by Tesla Solar Inverter, your fully integrated system is safe and reliable. ',
      },
      monitoring: {
        image:
          'https://tesla-cdn.thron.com/delivery/public/image/tesla/f7e7ce60-a70b-4dd9-883c-7baf1c0eb636/bvlatuR/std/2880x1800/SP-tesla-app-D',
        title: '24/7 Monitoring',
        subtitle: 'Experience',
        text: 'Manage your solar system from anywhere in the world with 24/7 mobile monitoring. Watch your energy in real time or set your preferences to optimize for energy independence. ',
      },
      specs: [
        {
          tab: 'Solar Panels',
          image:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/2e1f9207-01b8-4455-a9c8-b4ca95b7afb4/bvlatuR/std/2880x1800/_25-Specs-D',
          specs: [
            {
              desc: 'Tile and Power Warranty',
              number: '25 years',
            },
            {
              desc: 'Wind Rating',
              number: 'ASTM D3161 Class F',
            },
            {
              desc: 'Fire Rating',
              number: 'Class A (highest rating)',
            },
            {
              desc: 'Hail Rating',
              number: 'ANSI FM 4473 Class 3',
            },
            {
              desc: 'Roof Pitch',
              number: '2:12 to 24:12',
            },
            {
              desc: 'Inverter Power',
              number: '3.8kW / 7.6kW 97.5% efficiency',
            },
          ],
        },
      ],
    };
  },
});

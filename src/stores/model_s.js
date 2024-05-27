import { defineStore } from 'pinia'

export const useModelSStore = defineStore({
  id: 'modelS',
  state() {
    return {
      intro: {
        image: 'home/models.webp',
        title: 'Model S',
        subtitle: 'Plaid',
        characteristics: [
          {
            number: '396 mi',
            desc: 'Range (EPA est.) '
          },
          {
            number: '1.99s',
            desc: '0-60 mph*'
          },
          {
            number: '200mph',
            desc: 'Top Speed'
          },
          {
            number: '1,020hp',
            desc: 'peak power'
          }
        ]
      },
      interior: {
        title: 'interior of the future',
        image: 'model_s/model-s-interior.webp'
      },
      videoSlider: [
        {
          video:
            'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-S-Interior-Carousel-1-Cinematic-Display-Desktop-Global.mp4',
          title: 'Cinematic Experience',
          text: 'A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more. '
        },
        {
          video:
            'https://digitalassets.tesla.com/tesla-contents/video/upload/Model-S-Interior-Carousel-2-Yoke-Steering-Desktop.mp4',
          title: 'Yoke Steering',
          text: 'A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip. '
        },
        {
          video:
            'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-S-Interior-Carousel-3-Perfect-Environment-Desktop.mp4',
          title: 'Perfect Invorenment',
          text: 'Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment'
        },
        {
          video:
            'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-S-Interior-Carousel-4-Second-Row-Desktop.mp4',
          title: 'Redesigned Second Row',
          text: 'Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging. '
        },
        {
          video:
            'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/MS-Interior-Carousel-5-Gaming-Mobile.mp4',
          title: 'Console-Grade Gaming',
          text: 'Up to 10 teraflops of processing power unlock in-car gaming on-par with today’s newest consoles. Play from any seat with wireless controller and headset compatibility. '
        }
      ],
      grid: [
        {
          image:
            'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Interior-Grid-A-DMT.jpg',
          title: 'Stay Connected',
          text: 'Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.'
        },
        {
          image:
            'https://www.upfrunk.com/wp-content/uploads/2021/09/global-pristine-sound-interior-drawer.jpg',
          title: 'Immersive Sound',
          text: 'A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality'
        },
        {
          image:
            'https://digitalassets.tesla.com/tesla-contents/image/upload/h_584,w_1040,c_fit,f_auto,q_auto:best/MS-Interior-Grid-D-Desktop',
          title: 'Room for Everything',
          text: 'With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.'
        }
      ],
      ludicrous: {
        image:
          'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Performance-Desktop.jpg',
        title: 'Beyond Ludicrous',
        subtitle: 'Plaid',
        text: 'Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. ',
        characteristics: [
          {
            number: '1,020hp',
            desc: 'peak power'
          },
          {
            number: '9.23s',
            desc: '155 mph 1/4 mile'
          },
          {
            number: '1.99s',
            desc: '0-60 mph*'
          }
        ]
      },
      tabs: [
        {
          mainTitle: 'Electric Powertrain',
          mainText:
            'Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions. ',
          image:
            'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1235,w_2880,c_fit,f_auto,q_auto:best/Model-S-Dual-Motor-Powertrain-Carousel-Desktop',
          title: 'Model S',
          subtitle: 'Plaid',
          text: 'Dual Motor All wheel drive unlocks more range than any other vehicle in our current lineup, with insane power and maximum control ',
          characteristics: [
            {
              number: '3.1s',
              desc: '0-60mph'
            },
            {
              number: '405mi',
              desc: 'Range (EPA est.)'
            },
            {
              number: '670hp',
              desc: 'peak power'
            }
          ]
        },
        {
          mainTitle: 'Electric Powertrain',
          mainText:
            'Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions. ',
          image:
            'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1235,w_2880,c_fit,f_auto,q_auto:best/Model-S-Plaid-Tri-Motor-Powertrain-Carousel-Desktop',
          title: 'Model S Plaid',
          subtitle: 'Plaid',
          text: 'Maintain 1,000+ horsepower all the way to 200mph Tri-Motor-All-Wheel-Drive, tourching three vectoringand three independent carbon sleeved rotors.',
          characteristics: [
            {
              number: '1.99s',
              desc: '0-60mph'
            },
            {
              number: '396mi',
              desc: 'Range (EPA est.)'
            },
            {
              number: '1,020hp',
              desc: 'peak power'
            }
          ]
        }
      ],
      designed: {
        image:
          'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Hero-Desktop-Global',
        title: 'Designed for Efficiency',
        subtitle: 'Exterior',
        text: 'With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence.'
      },
      grid2: [
        {
          image:
            'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-A-Desktop-Global',
          title: 'Relentless Performance',
          text: 'Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.'
        },
        {
          image:
            'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-B-Desktop-Global',
          title: 'Optimized Aerodynamics',
          text: 'Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.'
        },
        {
          image:
            'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-C-Desktop-Global',
          title: 'Refined Styling',
          text: 'An iconic silhouette meets refreshed, elegant proportions.'
        }
      ],
      videoSection: {
        video: 'https://www.tesla.com/sites/default/files/videos/Plaid-Range-Web-Desktop-8mb.mp4',
        title: 'Go Anywhere',
        subtitle: 'Range',
        text: 'With up to 405 miles of estimated range and access to the world’s largest and most powerful fast charging network, you’ll spend less time plugged in and more time on the road.'
      },
      maps: [
        {
          mainTitle: 'Freedom to Travel',
          mainText:
            'Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with Superchargers along the way.',
          image:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/12143a39-2ef5-4111-8952-8f3d5cb3423b/bvlatuR/std/2450x1124/SF-LA-Range-Map',
          title: 'San Francisco to Los Angeles',
          characteristic: '383miles'
        },
        {
          mainTitle: 'Freedom to Travel',
          mainText:
            'Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with Superchargers along the way.',

          image:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/d9e26485-e44c-4666-82fc-7a87550cf70d/bvlatuR/std/2450x1124/map_berkeley_bg-2x',
          title: 'Berkley to Lake Tahoe',
          characteristic: '178miles'
        },
        {
          mainTitle: 'Freedom to Travel',
          mainText:
            'Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with Superchargers along the way.',
          image:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/86eac453-d308-4724-9a9a-d00343ac2ad3/bvlatuR/std/2450x1124/map_newyork_bg-2x',
          title: 'Manhattan to Boston',
          characteristic: '211miles'
        },
        {
          mainTitle: 'Freedom to Travel',
          mainText:
            'Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with Superchargers along the way.',
          image:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/f43bfbe5-2246-4e1e-a9a6-ffe490154fcc/bvlatuR/std/2450x1124/map_florida_bg-2x',
          title: 'Fort Laudarle to Orlando',
          characteristic: '195miles'
        }
      ],
      imageSection: {
        image: 'model_s/models-scheme.webp',
        title: 'High Impact Protection',
        subtitle: 'Safety',
        text: 'Model S is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every new Model S includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost. '
      },
      future: {
        image:
          'https://digitalassets.tesla.com/tesla-contents/image/upload/h_2560,w_4096,c_fit,f_auto,q_auto:best/Autopilot-Hero-Vision_Desktop',
        title: 'Future of Driving',
        subtitle: 'Autopilot',
        text: 'Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly.',
        characteristics: [
          {
            number: '360°',
            desc: 'Rear, side and forward-facing cameras provide maximum visibility'
          },
          {
            number: '250m',
            desc: 'Powerful visual processing at up to 250 meters of range'
          },
          {
            number: '🤖',
            desc: 'Tesla Vision detects nearby cars, helps prevent potential collisions and assists with parking '
          }
        ]
      },
      autopilot: [
        {
          mainTitle: 'Features',
          mainText:
            'Enhanced Autopilot and Full Self-Driving capability introduce additional features and improve existing functionality to make your car more capable over time, including: ',
          video:
            'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model_S_Navigate_0-mp4.mp4',
          title: 'Navigate on Autopilot',
          text: 'Active guidance from off-ramp to on-ramp'
        },
        {
          mainTitle: 'Features',
          mainText:
            'Enhanced Autopilot and Full Self-Driving capability introduce additional features and improve existing functionality to make your car more capable over time, including: ',

          video:
            'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/lane_change_0-mp4.mp4',

          title: 'Auto lane Change',
          text: 'Automaticallyu change lanes while driving on the highway'
        },
        {
          mainTitle: 'Features',
          mainText:
            'Enhanced Autopilot and Full Self-Driving capability introduce additional features and improve existing functionality to make your car more capable over time, including: ',
          video:
            'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/summon_1-mp4.mp4',

          title: 'Summon',
          text: 'Automatically retrieve your car'
        },
        {
          mainTitle: 'Features',
          mainText:
            'Enhanced Autopilot and Full Self-Driving capability introduce additional features and improve existing functionality to make your car more capable over time, including: ',
          video:
            'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/parking-mp4.mp4',
          title: 'Autopark',
          text: 'Parallel and Perpendicular parking with ine touch'
        }
      ],
      specs: [
        {
          tab: 'Model S Plaid',
          image:
            'https://digitalassets.tesla.com/tesla-contents/image/upload/h_3071,w_4096,c_fit,f_auto,q_auto:best/Model-S-Specs-Hero-Desktop-LHD',
          specs: [
            {
              desc: 'Range(EPA est.)',
              number: '396mi'
            },
            {
              desc: '1/4mi',
              number: '9.23@155 mph trap speed'
            },
            {
              desc: 'Peak Power',
              number: '1,020 hp'
            },
            {
              desc: 'Wheels',
              number: '19" or 21"'
            },
            {
              desc: 'Cargo',
              number: '28 cu ft'
            },
            {
              desc: 'Weigth',
              number: '4,766 lbs'
            },
            {
              desc: 'Acceleration',
              number: '1.99 s 0-60 mph'
            },
            {
              desc: 'Top Speed',
              number: '200mph'
            },
            {
              desc: 'Drag Coefficient',
              number: '0.208 Cd'
            },
            {
              desc: 'Powertrain',
              number: 'Tri Motor'
            },
            {
              desc: 'Supercharging max',
              number: '250kW'
            }
          ]
        },
        {
          tab: 'Model S',
          image:
            'https://digitalassets.tesla.com/tesla-contents/image/upload/h_3071,w_4096,c_fit,f_auto,q_auto:best/Model-S-Specs-Hero-Desktop-LHD',
          specs: [
            {
              desc: 'Supercharging max',
              number: '250kW'
            },
            {
              desc: 'Range(EPA est.)',
              number: '396mi'
            },
            {
              desc: '1/4mi',
              number: '9.23@155 mph trap speed'
            },
            {
              desc: 'Peak Power',
              number: '1,020 hp'
            },
            {
              desc: 'Wheels',
              number: '19" or 21"'
            },

            {
              desc: 'Weigth',
              number: '4,766 lbs'
            },
            {
              desc: 'Acceleration',
              number: '1.99 s 0-60 mph'
            },
            {
              desc: 'Top Speed',
              number: '200mph'
            },
            {
              desc: 'Cargo',
              number: '28 cu ft'
            },
            {
              desc: 'Drag Coefficient',
              number: '0.208 Cd'
            },
            {
              desc: 'Powertrain',
              number: 'Tri Motor'
            }
          ]
        }
      ]
    }
  }
})

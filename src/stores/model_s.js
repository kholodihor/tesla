import { defineStore } from 'pinia'

export const useModelSStore =
  defineStore({
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
              desc: 'Range (EPA est.) ',
            },
            {
              number: '1.99s',
              desc: '0-60 mph*',
            },
            {
              number: '200mph',
              desc: 'Top Speed',
            },
            {
              number: '1,020hp',
              desc: 'peak power',
            },
          ],
        },
        interior: {
          title:
            'interior of the future',
          image:
            'model_s/model-s-interior.webp',
        },
        videoSlider: [
          {
            video:
              'https://tesla-cdn.thron.com/delivery/public/video/tesla/9a153db3-198b-4502-98bc-3bc6041597fd/bvlatuR/WEBHD/model-s-interior-carousel-1-cinematic-display-desktop-global',
            title:
              'Cinematic Experience',
            text: 'A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more. ',
          },
          {
            video:
              'https://tesla-cdn.thron.com/delivery/public/video/tesla/c39b1f9b-dfe6-4e45-a0d7-0156ff7d2706/bvlatuR/WEBHD/MS-Interior-Carousel-2-Yoke-Desktop',
            title: 'Yoke Steering',
            text: 'A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip. ',
          },
          {
            video:
              'https://tesla-cdn.thron.com/delivery/public/video/tesla/ac921a72-b7e7-404b-9acc-373a02ef2869/bvlatuR/WEBHD/MS-Interior-Carousel-3-Environment-Desktop',
            title:
              'Perfect Invorenment',
            text: 'Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment',
          },
          {
            video:
              'https://tesla-cdn.thron.com/delivery/public/video/tesla/ce17484f-f941-4040-92b3-cc2a1564a6ff/bvlatuR/WEBHD/MS-Interior-Carousel-4-Rear-Seats-Desktop',
            title:
              'Redesigned Second Row',
            text: 'Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging. ',
          },
          {
            video:
              'https://tesla-cdn.thron.com/delivery/public/video/tesla/66dae454-284f-41e6-b730-1773e87126f0/bvlatuR/WEBHD/MS-Interior-Carousel-5-Gaming-Mobile',
            title:
              'Console-Grade Gaming',
            text: 'Up to 10 teraflops of processing power unlock in-car gaming on-par with today’s newest consoles. Play from any seat with wireless controller and headset compatibility. ',
          },
        ],
        grid: [
          {
            image:
              'https://tesla-cdn.thron.com/delivery/public/image/tesla/180e927c-0542-4428-beb7-1411502fe3bb/bvlatuR/std/1040x584/MS-Interior-Grid-A-Desktop',
            title: 'Stay Connected',
            text: 'Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.',
          },
          {
            image:
              'https://www.upfrunk.com/wp-content/uploads/2021/09/global-pristine-sound-interior-drawer.jpg',
            title: 'Immersive Sound',
            text: 'A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality',
          },
          {
            image:
              'https://tesla-cdn.thron.com/delivery/public/image/tesla/ab165f41-fa4e-4abe-b82a-51bdc295cf42/bvlatuR/std/1040x584/MS-Interior-Grid-D-Desktop',
            title:
              'Room for Everything',
            text: 'With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.',
          },
        ],
        ludicrous: {
          image:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/08585f00-c0b7-4bda-80e4-2b78406b5582/bvlatuR/std/4096x2560/Model-S-Performance-Hero-Desktop-LHD',
          title: 'Beyond Ludicrous',
          subtitle: 'Plaid',
          text: 'Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. ',
          characteristics: [
            {
              number: '1,020hp',
              desc: 'peak power',
            },
            {
              number: '9.23s',
              desc: '155 mph 1/4 mile',
            },
            {
              number: '1.99s',
              desc: '0-60 mph*',
            },
          ],
        },
        tabs: [
          {
            mainTitle:
              'Electric Powertrain',
            mainText:
              'Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions. ',
            image:
              'https://tesla-cdn.thron.com/delivery/public/image/tesla/0f44fadf-7d40-43b6-b94d-de289b38840c/bvlatuR/std/1920x900/model-s-performance-dual-motor-desktop_carousel-new',
            title: 'Model S',
            subtitle: 'Plaid',
            text: 'Dual Motor All wheel drive unlocks more range than any other vehicle in our current lineup, with insane power and maximum control ',
            characteristics: [
              {
                number: '3.1s',
                desc: '0-60mph',
              },
              {
                number: '405mi',
                desc: 'Range (EPA est.)',
              },
              {
                number: '670hp',
                desc: 'peak power',
              },
            ],
          },
          {
            mainTitle:
              'Electric Powertrain',
            mainText:
              'Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions. ',
            image:
              'https://tesla-cdn.thron.com/delivery/public/image/tesla/a4207386-4e7d-4028-924c-f7f21a0781b4/bvlatuR/std/1920x900/model-s-performance-tri-motor-desktop_carousel-new',
            title: 'Model S Plaid',
            subtitle: 'Plaid',
            text: 'Maintain 1,000+ horsepower all the way to 200mph Tri-Motor-All-Wheel-Drive, tourching three vectoringand three independent carbon sleeved rotors.',
            characteristics: [
              {
                number: '1.99s',
                desc: '0-60mph',
              },
              {
                number: '396mi',
                desc: 'Range (EPA est.)',
              },
              {
                number: '1,020hp',
                desc: 'peak power',
              },
            ],
          },
        ],
        designed: {
          image:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/1981e29b-2ce8-4620-9c6a-fe1eaf005656/bvlatuR/std/3456x2160/Model-S-Exterior-Hero-Desktop-Global',
          title:
            'Designed for Efficiency',
          subtitle: 'Exterior',
          text: 'With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence.',
        },
        grid2: [
          {
            image:
              'https://tesla-cdn.thron.com/delivery/public/image/tesla/fe86a447-03fe-43ce-bf53-daff2a81210d/bvlatuR/std/3949x2217/Model-S-Exterior-Grid-A-Desktop-Global',
            title:
              'Relentless Performance',
            text: 'Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.',
          },
          {
            image:
              'https://tesla-cdn.thron.com/delivery/public/image/tesla/1020d97e-9a6f-4932-9914-0ce889ecfaa6/bvlatuR/std/3840x2156/Model-S-Exterior-Grid-B-Desktop-Global',
            title:
              'Optimized Aerodynamics',
            text: 'Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.',
          },
          {
            image:
              'https://tesla-cdn.thron.com/delivery/public/image/tesla/b592fbac-9ccd-4951-94b8-f5c5157dfe5b/bvlatuR/std/3657x2039/Model-S-Exterior-Grid-C-Desktop-Global',
            title: 'Refined Styling',
            text: 'An iconic silhouette meets refreshed, elegant proportions.',
          },
        ],
        videoSection: {
          video:
            'https://www.tesla.com/sites/default/files/videos/Plaid-Range-Web-Desktop-8mb.mp4',
          title: 'Go Anywhere',
          subtitle: 'Range',
          text: 'With up to 405 miles of estimated range and access to the world’s largest and most powerful fast charging network, you’ll spend less time plugged in and more time on the road.',
        },
        maps: [
          {
            mainTitle:
              'Freedom to Travel',
            mainText:
              'Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with Superchargers along the way.',
            image:
              'https://tesla-cdn.thron.com/delivery/public/image/tesla/12143a39-2ef5-4111-8952-8f3d5cb3423b/bvlatuR/std/2450x1124/SF-LA-Range-Map',
            title:
              'San Francisco to Los Angeles',
            characteristic: '383miles',
          },
          {
            mainTitle:
              'Freedom to Travel',
            mainText:
              'Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with Superchargers along the way.',

            image:
              'https://tesla-cdn.thron.com/delivery/public/image/tesla/d9e26485-e44c-4666-82fc-7a87550cf70d/bvlatuR/std/2450x1124/map_berkeley_bg-2x',
            title:
              'Berkley to Lake Tahoe',
            characteristic: '178miles',
          },
          {
            mainTitle:
              'Freedom to Travel',
            mainText:
              'Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with Superchargers along the way.',
            image:
              'https://tesla-cdn.thron.com/delivery/public/image/tesla/86eac453-d308-4724-9a9a-d00343ac2ad3/bvlatuR/std/2450x1124/map_newyork_bg-2x',
            title:
              'Manhattan to Boston',
            characteristic: '211miles',
          },
          {
            mainTitle:
              'Freedom to Travel',
            mainText:
              'Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with Superchargers along the way.',
            image:
              'https://tesla-cdn.thron.com/delivery/public/image/tesla/f43bfbe5-2246-4e1e-a9a6-ffe490154fcc/bvlatuR/std/2450x1124/map_florida_bg-2x',
            title:
              'Fort Laudarle to Orlando',
            characteristic: '195miles',
          },
        ],
        imageSection: {
          image:
            'model_s/models-scheme.webp',
          title:
            'High Impact Protection',
          subtitle: 'Safety',
          text: 'Model S is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every new Model S includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost. ',
        },
        future: {
          image:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/c960989c-3359-4caf-8cc7-afb07c372d6f/bvlatuR/std/4096x2560/Autopilot-Hero-Vision-Desktop',
          title: 'Future of Driving',
          subtitle: 'Autopilot',
          text: 'Autopilot enables your car to steer, accelerate and brake automatically within its lane under your active supervision, assisting with the most burdensome parts of driving. With over-the-air software updates, the latest enhancements are available instantly.',
          characteristics: [
            {
              number: '360°',
              desc: 'Rear, side and forward-facing cameras provide maximum visibility',
            },
            {
              number: '250m',
              desc: 'Powerful visual processing at up to 250 meters of range',
            },
            {
              number: '🤖',
              desc: 'Tesla Vision detects nearby cars, helps prevent potential collisions and assists with parking ',
            },
          ],
        },
        autopilot: [
          {
            mainTitle: 'Features',
            mainText:
              'Enhanced Autopilot and Full Self-Driving capability introduce additional features and improve existing functionality to make your car more capable over time, including: ',
            video:
              'https://tesla-cdn.thron.com/static/A7I6LP_lane_change_0.mp4-2000_PYSUF4.mp4',
            title:
              'Navigate on Autopilot',
            text: 'Active guidance from off-ramp to on-ramp',
          },
          {
            mainTitle: 'Features',
            mainText:
              'Enhanced Autopilot and Full Self-Driving capability introduce additional features and improve existing functionality to make your car more capable over time, including: ',

            video:
              'https://tesla-cdn.thron.com/static/A7I6LP_lane_change_0.mp4-2000_PYSUF4.mp4',

            title: 'Auto lane Change',
            text: 'Automaticallyu change lanes while driving on the highway',
          },
          {
            mainTitle: 'Features',
            mainText:
              'Enhanced Autopilot and Full Self-Driving capability introduce additional features and improve existing functionality to make your car more capable over time, including: ',
            video:
              'https://tesla-cdn.thron.com/delivery/public/video/tesla/14877527-9b58-40e9-8a5e-fc47c4afb126/bvlatuR/WEBHD/summon_1',

            title: 'Summon',
            text: 'Automatically retrieve your car',
          },
          {
            mainTitle: 'Features',
            mainText:
              'Enhanced Autopilot and Full Self-Driving capability introduce additional features and improve existing functionality to make your car more capable over time, including: ',
            video:
              'https://tesla-cdn.thron.com/delivery/public/video/tesla/53faf083-f129-4c48-a28f-0f56c8ca5d90/bvlatuR/WEBHD/parking',
            title: 'Autopark',
            text: 'Parallel and Perpendicular parking with ine touch',
          },
        ],
        specs: [
          {
            tab:'Model S Plaid',
            image:'https://tesla-cdn.thron.com/delivery/public/image/tesla/649c549e-12b4-40c6-9294-7e996b8d3ccb/bvlatuR/std/4096x3071/Model-S-Specs-Hero-Desktop-LHD',
            specs: [
              {
                desc: 'Range(EPA est.)',
                number: '396mi',
              },
              {
                desc: '1/4mi',
                number:
                  '9.23@155 mph trap speed',
              },
              {
                desc: 'Peak Power',
                number: '1,020 hp',
              },
              {
                desc: 'Wheels',
                number: '19" or 21"',
              },
              {
                desc: 'Cargo',
                number: '28 cu ft',
              },
              {
                desc: 'Weigth',
                number: '4,766 lbs',
              },
              {
                desc: 'Acceleration',
                number:
                  '1.99 s 0-60 mph',
              },
              {
                desc: 'Top Speed',
                number: '200mph',
              },
              {
                desc: 'Drag Coefficient',
                number: '0.208 Cd',
              },
              {
                desc: 'Powertrain',
                number: 'Tri Motor',
              },
              {
                desc: 'Supercharging max',
                number: '250kW',
              },
            ],
          },
          {
            tab:'Model S',
            image:'https://tesla-cdn.thron.com/delivery/public/image/tesla/649c549e-12b4-40c6-9294-7e996b8d3ccb/bvlatuR/std/4096x3071/Model-S-Specs-Hero-Desktop-LHD',
            specs: [
              {
                desc: 'Supercharging max',
                number: '250kW',
              },
              {
                desc: 'Range(EPA est.)',
                number: '396mi',
              },
              {
                desc: '1/4mi',
                number:
                  '9.23@155 mph trap speed',
              },
              {
                desc: 'Peak Power',
                number: '1,020 hp',
              },
              {
                desc: 'Wheels',
                number: '19" or 21"',
              },

              {
                desc: 'Weigth',
                number: '4,766 lbs',
              },
              {
                desc: 'Acceleration',
                number:
                  '1.99 s 0-60 mph',
              },
              {
                desc: 'Top Speed',
                number: '200mph',
              },
              {
                desc: 'Cargo',
                number: '28 cu ft',
              },
              {
                desc: 'Drag Coefficient',
                number: '0.208 Cd',
              },
              {
                desc: 'Powertrain',
                number: 'Tri Motor',
              },
            ],
          },
        ],
      }
    },
  })

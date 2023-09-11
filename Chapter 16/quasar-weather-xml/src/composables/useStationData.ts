import { SelectOptions } from 'src/components/models';

/**
 * Data to describe the available data selections
 * @returns Map<string, SelectOptions[]>
 */
export function useStationData(): Map<string, SelectOptions[]> {
  return new Map([
    [
      'az',
      [
        { label: 'Flagstaff Pulliam Airport', value: 'KFLG' },
        {
          label: 'Phoenix, Phoenix Sky Harbor International Airport',
          value: 'KPHX',
        },
        { label: 'Scottsdale Airport', value: 'KSDL' },
        { label: 'Tucson, Tucson International Airport', value: 'KTUS' },
        { label: 'St.Johns, St.Johns Industrial Airpark', value: 'KSJN' },
      ],
    ],
    [
      'ca',
      [
        { label: 'San Diego International Airport', value: 'KSAN' },
        { label: 'San Jose, San Jose International Airport', value: 'KSJC' },
        { label: 'Tijuana International Airport', value: 'MMTJ' },
        {
          label: 'Los Angeles, Los Angeles International Airport',
          value: 'KLAX',
        },
        { label: 'Sacramento International Airport', value: 'KSMF' },
      ],
    ],
    [
      'me',
      [
        { label: 'Augusta, Augusta State Airport', value: 'KAUG' },
        { label: 'Bangor, Bangor International Airport', value: 'KBGR' },
        { label: 'Portland, Portland International Jetport', value: 'KPWM' },
        { label: 'Caribou, Caribou Municipal Airport', value: 'KCAR' },
        { label: 'Greenville', value: 'KGNR' },
      ],
    ],
    [
      'fl',
      [
        { label: 'Daytona Beach International Airport', value: 'KDAB' },
        {
          label: 'Fort Lauderdale / Hollywood International Airport',
          value: 'KFLL',
        },
        { label: 'Kissimmee Gateway Airport', value: 'KISM' },
        { label: 'Miami, Miami International Airport', value: 'KMIA' },
        { label: 'Orlando International Airport', value: 'KMCO' },
      ],
    ],
    [
      'tx',
      [
        { label: 'Amarillo, Amarillo International Airport', value: 'KAMA' },
        { label: 'Austin - Bergstrom International Airport', value: 'KAUS' },
        { label: 'Dallas / Fort Worth International Airport', value: 'KDFW' },
        { label: 'Houston Intercontinental Airport', value: 'KIAH' },
        {
          label: 'San Antonio, San Antonio International Airport',
          value: 'KSAT',
        },
      ],
    ],
  ]);
}

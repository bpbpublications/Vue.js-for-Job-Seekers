import { XMLParser } from 'fast-xml-parser';
import { ObservationData } from 'src/components/models';

/**
 * Simple XMLParser
 */

const parser = new XMLParser();

export type XMLExtract = (xml: { data: string | Buffer }) => ObservationData;
export type XMLExtractRecord = Record<string, XMLExtract>;

/**
 * Extracts the required data from the Parser
 * @returns XMLExtractRecord
 */
export function useXmlExtract(): XMLExtractRecord {
  const getObservationData = (xml: {
    data: string | Buffer;
  }): ObservationData => {
    return parser.parse(xml.data).current_observation;
  };

  return { getObservationData };
}

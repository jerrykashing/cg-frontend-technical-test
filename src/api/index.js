// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  /**
   * get all vehicles data
   */
  const vehicles = await request('/api/vehicles.json');

  /**
   * request all vehicle summary data
   */
  const vehicleSummaryReqs = vehicles.map(async (vehicle) => {
    const { apiUrl, media } = vehicle;
    const vehicleSummary = await request(vehicle.apiUrl);
    const { id, description, price } = vehicleSummary;
    return {
      id,
      apiUrl,
      description,
      price,
      media,
    };
  });

  /**
   * - wait until all requests settled
   * - filter out vehicles with broken apiUrl or without any price information
   * - transform and get the vehicleSummary from the outcome object
   */
  const vehicleSummaryResults = await Promise.allSettled(vehicleSummaryReqs);
  const vehicleSummaries = vehicleSummaryResults.filter((vehicleSummaryReq) => {
    return (
      vehicleSummaryReq.status === 'fulfilled'
      && vehicleSummaryReq.value.price !== undefined
      && vehicleSummaryReq.value.price !== ''
    );
  }).map((vehicleSummary) => {
    return vehicleSummary.value;
  });

  return vehicleSummaries;
}

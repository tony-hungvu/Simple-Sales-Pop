import {getCurrentShop} from '@functions/helpers/auth';
import {getShopById} from '@functions/repositories/shopRepository';

/**
 * Get current subscription of a shop
 *
 * @param {Context|Object|*} ctx
 * @returns {Promise<void>}
 */
export const getSubscription = async ctx => {
  const shop = await getShopById(getCurrentShop(ctx));
  ctx.body = {shop};
};

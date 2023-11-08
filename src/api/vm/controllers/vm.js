'use strict';

/**
 * vm controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::vm.vm');

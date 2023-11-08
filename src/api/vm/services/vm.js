'use strict';

/**
 * vm service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vm.vm');

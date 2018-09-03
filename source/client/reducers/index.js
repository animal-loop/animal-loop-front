import { combineReducers } from 'redux';

/* Reducers */
import accountSetting from './account_setting/';
import driverFulfillment from './driver_fulfillment/';
import detailFulfillment from './detail_fulfillment/';
import summaryFulfillment from './summary_fulfillment/';
import detail_roadwarning from './detail_roadwarning/';
import detail_behaviour from './detail_behaviour/';
import dashboard from './dashboard/';
import login from './login/';
import header from './header/';
import nav from './nav/';
import summaryFatigue from './summary_fatigue/';
import detailFatigue from './detail_fatigue/';
import summaryBehaviour from './summary_behaviour/';
import summaryRoadwarning from './summary_roadwarning/';
import tags from './common/tags/';
import assignmentList from './assignment_list/';
import homologationDriver from './homologation_driver/';
import homologationVehicle from './homologation_vehicle/';
import accountDriver from './account_driver/';
import accountVehicle from './account_vehicle/';

const reducer = combineReducers({
	accountSetting,
	driverFulfillment,
	detailFulfillment,
	summaryFulfillment,
	detail_roadwarning,
	detail_behaviour,
  login,
  header,
  nav,
  summaryFatigue,
  detailFatigue,
  summaryBehaviour,
  summaryRoadwarning,
  tags,
  dashboard,
  assignmentList,
  homologationDriver,
  homologationVehicle,
  accountDriver,
  accountVehicle
});

export default reducer;

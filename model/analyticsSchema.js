const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  date: String,
  outTime: String ,
  inTime: String ,
  vehicleId: String,
  vehicle: String,
  vehicleNo: String,
  testNo: Number,
  vehicleNo: String,
  driver: String,
  weight: Number,
  maxSpeed: Number,
  avgSpeed: Number,
  initDistance: Number,
  finalDistance: Number,
  avgRpm: Number,
  ambTemperature: Number,
  driveMode: Number,
  ecoMode: Number,
  initMotorTemperature: Number,
  finalMotorTemperature: Number,
  avgMotorTemperature: Number,
  maxMotorTemperature: Number,
  initControllerTemperature: Number,
  finalControllerTemperature: Number,
  avgControllerTemperature: Number,
  maxControllerTemperature: Number,
  initVoltage: Number,
  finalVoltage: Number,
  maxCurrent: Number,
  avgCurrent: Number,
  initSOC: Number,
  finalSOC: Number,
  initAh: Number,
  finalAH: Number,
  whrConsumed: Number,
  maxMosTemperature: Number,
  maxBalanceTemperature: Number,
  batteryFault: String,
  highCellVoltage: Number,
  lowCellVoltage: Number,
  maxCellDifference: Number,
  // initCellDifference: Number,
  efficiency: Number,
  avgGradient: Number,
  // maxGradient: Number,
  avgWhkm: Number,
  maxWhkm: Number,
  chargingStartTime: String,
  chargingEndTime: String,
  chargingStartSoc: Number,
  chargingEndSoc: Number,
  chargingCurrent: Number,
  batteryHealthCharging: String,
  batteryEfficiency: Number,
  chargingRemark: String,

  tripAt10Soc: Number,
  tripAt20Soc: Number,
  tripAt30Soc: Number,
  tripAt40Soc: Number,
  tripAt50Soc: Number,
  tripAt60Soc: Number,
  tripAt70Soc: Number,
  tripAt80Soc: Number,
  tripAt90Soc: Number,
  tripAt100Soc: Number,

  avgSpeedAt10SOC: Number,
  avgSpeedat20SOC: Number,
  avgSpeedat30SOC: Number,
  avgSpeedat40SOC: Number,
  avgSpeedat50SOC: Number,
  avgSpeedat60SOC: Number,
  avgSpeedat70SOC: Number,
  avgSpeedat80SOC: Number,
  avgSpeedat90SOC: Number,
  avgSpeedat100SOC: Number,

  avgMotorTemperatureAt10SOC: Number,
  avgMotorTemperatureat20SOC: Number,
  avgMotorTemperatureat30SOC: Number,
  avgMotorTemperatureat40SOC: Number,
  avgMotorTemperatureat50SOC: Number,
  avgMotorTemperatureat60SOC: Number,
  avgMotorTemperatureat70SOC: Number,
  avgMotorTemperatureat80SOC: Number,
  avgMotorTemperatureat90SOC: Number,
  avgMotorTemperatureat100SOC: Number,
  
  avgControllerTemperatureat10SOC: Number,
  avgControllerTemperatureat20SOC: Number,
  avgControllerTemperatureat30SOC: Number,
  avgControllerTemperatureat40SOC: Number,
  avgControllerTemperatureat50SOC: Number,
  avgControllerTemperatureat60SOC: Number,
  avgControllerTemperatureat70SOC: Number,
  avgControllerTemperatureat80SOC: Number,
  avgControllerTemperatureat90SOC: Number,
  avgControllerTemperatureat100SOC: Number,
  
  avgCurrentat10SOC: Number,
  avgCurrentat20SOC: Number,
  avgCurrentat30SOC: Number,
  avgCurrentat40SOC: Number,
  avgCurrentat50SOC: Number,
  avgCurrentat60SOC: Number,
  avgCurrentat70SOC: Number,
  avgCurrentat80SOC: Number,
  avgCurrentat90SOC: Number,
  avgCurrentat100SOC: Number,
  
  avgWhrkmat10SOC: Number,
  avgWhrkmat20SOC: Number,
  avgWhrkmat30SOC: Number,
  avgWhrkmat40SOC: Number,
  avgWhrkmat50SOC: Number,
  avgWhrkmat60SOC: Number,
  avgWhrkmat70SOC: Number,
  avgWhrkmat80SOC: Number,
  avgWhrkmat90SOC: Number,
  avgWhrkmat100SOC: Number,

  CurrentDate: {
    type: Date,
    default: () => new Date().toISOString().slice(0, 10)
  },
});

const Analytics = mongoose.model('Analytics', analyticsSchema);
module.exports = Analytics;

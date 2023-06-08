import palette from '../../common/theme/palette';
import { loadImage, prepareIcon } from './mapUtil';

import directionSvg from '../../resources/images/direction.svg';
import backgroundSvg from '../../resources/images/background.svg';
import animalSvg from '../../resources/images/icon/animal.svg';
import bicycleSvg from '../../resources/images/icon/bicycle.svg';
import boatSvg from '../../resources/images/icon/boat.svg';
import busSvg from '../../resources/images/icon/bus.svg';
import carSvg from '../../resources/images/icon/car.svg';
import craneSvg from '../../resources/images/icon/crane.svg';
import defaultSvg from '../../resources/images/icon/default.svg';
import helicopterSvg from '../../resources/images/icon/helicopter.svg';
import motorcycleSvg from '../../resources/images/icon/motorcycle.svg';
import offroadSvg from '../../resources/images/icon/offroad.svg';
import personSvg from '../../resources/images/icon/person.svg';
import pickupSvg from '../../resources/images/icon/pickup.svg';
import planeSvg from '../../resources/images/icon/plane.svg';
import scooterSvg from '../../resources/images/icon/scooter.svg';
import shipSvg from '../../resources/images/icon/ship.svg';
import tractorSvg from '../../resources/images/icon/tractor.svg';
import trainSvg from '../../resources/images/icon/train.svg';
import tramSvg from '../../resources/images/icon/tram.svg';
import trolleybusSvg from '../../resources/images/icon/trolleybus.svg';
import truckSvg from '../../resources/images/icon/truck.svg';
import vanSvg from '../../resources/images/icon/van.svg';
import rwcSvg from '../../resources/images/icon/rwc.svg';
import rwsSvg from '../../resources/images/icon/rws.svg';
import strandjeepSvg from '../../resources/images/icon/strandjeep.svg';
import lifeguardSvg from '../../resources/images/icon/lifeguard.svg';
import vletSvg from '../../resources/images/icon/vlet.svg';
import ribrbSvg from '../../resources/images/icon/ribrb.svg';
import atvrbSvg from '../../resources/images/icon/atvrb.svg';
import bicyclerbSvg from '../../resources/images/icon/bicyclerb.svg';
import tinnSvg from '../../resources/images/icon/tinn.svg';
import mobSvg from '../../resources/images/icon/mob.svg';
import ribSvg from '../../resources/images/icon/rib.svg';
import khvSvg from '../../resources/images/icon/khv.svg';
import valentijnSvg from '../../resources/images/icon/valentijn.svg';
import arievisserSvg from '../../resources/images/icon/arievisser.svg';
import johannesfrederikSvg from '../../resources/images/icon/johannesfrederik.svg';
import nh1816Svg from '../../resources/images/icon/nh1816.svg';
import nicolaasSvg from '../../resources/images/icon/nicolaas.svg';
import floatSvg from '../../resources/images/icon/float.svg';
import atlanticSvg from '../../resources/images/icon/atlantic.svg';
import medicSvg from '../../resources/images/icon/medic.svg';
import policeSvg from '../../resources/images/icon/police.svg';
import fireSvg from '../../resources/images/icon/fire.svg';
import quadSvg from '../../resources/images/icon/quad.svg';

export const mapIcons = {
  animal: animalSvg,
  bicycle: bicycleSvg,
  boat: boatSvg,
  bus: busSvg,
  car: carSvg,
  crane: craneSvg,
  default: defaultSvg,
  helicopter: helicopterSvg,
  motorcycle: motorcycleSvg,
  offroad: offroadSvg,
  person: personSvg,
  pickup: pickupSvg,
  plane: planeSvg,
  scooter: scooterSvg,
  ship: shipSvg,
  tractor: tractorSvg,
  train: trainSvg,
  tram: tramSvg,
  trolleybus: trolleybusSvg,
  truck: truckSvg,
  van: vanSvg,
  rwc: rwcSvg,
  rws: rwsSvg,
  strandjeep: strandjeepSvg,
  lifeguard: lifeguardSvg,
  vlet: vletSvg,
  ribrb: ribrbSvg,
  atvrb: atvrbSvg,
  bicyclerb: bicyclerbSvg,
  tinn: tinnSvg,
  mob: mobSvg,
  rib: ribSvg,
  khv: khvSvg,
  valentijn: valentijnSvg,
  arievisser: arievisserSvg,
  johannesfrederik: johannesfrederikSvg,
  nh1816: nh1816Svg,
  nicolaas: nicolaasSvg,
  float: floatSvg,
  atlantic: atlanticSvg,
  medic: medicSvg,
  police: policeSvg,
  fire: fireSvg,
  quad: quadSvg,

};

export const mapIconKey = (category) => (mapIcons.hasOwnProperty(category) ? category : 'default');

export const mapImages = {};

export default async () => {
  const background = await loadImage(backgroundSvg);
  mapImages.background = await prepareIcon(background);
  mapImages.direction = await prepareIcon(await loadImage(directionSvg));
  await Promise.all(Object.keys(mapIcons).map(async (category) => {
    const results = [];
    ['primary', 'positive', 'negative', 'neutral'].forEach((color) => {
      results.push(loadImage(mapIcons[category]).then((icon) => {
        mapImages[`${category}-${color}`] = prepareIcon(background, icon, palette.colors[color]);
      }));
    });
    await Promise.all(results);
  }));
};

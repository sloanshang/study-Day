import React from 'react'
import { Route,IndexRoute} from 'react-router'
// import App from './containers/App'
import  App from './app'
import Home from './containers/Home';
import Schedules from './schedule/Schedules'

import Reports from './report/Reports'
import My from './my/My'
import Farm from './home/Farm'
import Farms from './containers/Farms'

import Inputs from './containers/Inputs'
import InputsIndex from './containers/InputsIndex'
import InputsSeed from './containers/InputsSeed'
import InputsSeedIndex from './containers/InputsSeedIndex'
import InputsSeedMother from './containers/InputsSeedMother'
import InputsSeedMotherIndex from './containers/InputsSeedMotherIndex'

import Mate from './input/seedpig/mate/Mate'
import PregnancyCheck from './input/seedpig/pregnancycheck/PregnancyCheck'
import Childbirth from './input/seedpig/childbirth/Childbirth'
import Ablactation from './input/seedpig/ablactation/Ablactation'

import { Transfer as SeedPigTransfer} from './input/seedpig/transfer/transfer'

import { Sale as SeedPigSale } from  './input/seedpig/sale/sale'
import { Dead as SeedPigDead} from './input/seedpig/dead/dead'

import FatPig from './input/fatpig/FatPig'
import FatPigIndex from  './input/fatpig'
import { Buy as FatPigBuy } from  './input/fatpig/buy/buy'
import { Transfer as FatPigTransfer} from './input/fatpig/transfer/transfer'
import { Sale as FatPigSale } from  './input/fatpig/sale/sale'
import { Dead as FatPigDead} from './input/fatpig/dead/dead'


import Material from './input/material/Material'
import MaterialIndex from './input/material'
import {FeedBuy} from './input/material/feedbuy/feedbuy'
import {FeedSale} from './input/material/feedsale/feedsale'
import {FeedUse} from './input/material/feeduse/feeduse'
import {SemenBuy} from './input/material/semenbuy/semenbuy'
import {SemenSale} from './input/material/semensale/semensale'
import {SemenUse} from './input/material/semenuse/semenuse'
import {SemenProduce} from './input/material/semenproduce/semenproduce'
import {VaccineBuy} from './input/material/vaccinebuy/vaccinebuy'
import {VaccineSale} from './input/material/vaccinesale/vaccinesale'
import {VaccineUse} from './input/material/vaccineuse/vaccineuse'
import {Stock} from './input/stock/stock'
export default
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="schedules" component={Schedules}>

    </Route>
    <Route path="inputs" component={Inputs}>
      <IndexRoute  component={InputsIndex}/>
      <Route path="seed" component={InputsSeed}>
        <IndexRoute  component={InputsSeedIndex}/>
        <Route path="mother" component={InputsSeedMother}>
          <IndexRoute component={InputsSeedMotherIndex}/>
          <Route path="mate" component={Mate}/>
          <Route path="pregnancycheck" component={PregnancyCheck}/>
          <Route path="ablactation" component={Ablactation}/>
          <Route path="childbirth" component={Childbirth}/>
        </Route>
        <Route path="transfer" component={SeedPigTransfer} />
        <Route path="sale" component={SeedPigSale} />
        <Route path="dead" component={SeedPigDead} />
      </Route>
       <Route path="fatpig" component={FatPig}>
        <IndexRoute  component={FatPigIndex}/>
        <Route path="buy" component={FatPigBuy} />
        <Route path="transfer" component={FatPigTransfer} />
        <Route path="sale" component={FatPigSale} />
        <Route path="dead" component={FatPigDead} />
      </Route>
       <Route path="material" component={Material}>
        <IndexRoute  component={MaterialIndex}/>
        <Route path="feedbuy" component={FeedBuy} />
        <Route path="feedsale" component={FeedSale} />
        <Route path="feeduse" component={FeedUse} />
        <Route path="semenuse" component={SemenUse} />
        <Route path="semensale" component={SemenSale} />
        <Route path="semenbuy" component={SemenBuy} />
        <Route path="semenproduce" component={SemenProduce} />
        <Route path="vaccinebuy" component={VaccineBuy} />
        <Route path="vaccinesale" component={VaccineSale} />
        <Route path="vaccineuse" component={VaccineUse} />
      </Route>
       <Route path="stock" component={Stock}/>
    </Route>
    <Route path="reports" component={Reports}>
    </Route>
    <Route path="my" component={My}/>
    <Route path="farms" component={Farms}/>
    <Route path="farm/:id" component={Farm}/>
  </Route>

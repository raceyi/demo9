import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  innerWidth;
  mainDivStyleValues: any;
  pictureStyleValues: any;
  titleStyleValues : any;
  introduceStyleValues: any;
  noticeStyleValues: any;
  explainStyleValues: any;
  eachExplainStyleValues: any;
  detailExplainTextStyleValues1: any;
  detailExplainTextStyleValues2: any;
  detailExplainTextStyleValues3: any;

  detailExplainStyleValues1: any;
  detailExplainStyleValues2: any;
  detailExplainStyleValues3: any;
  explainTextStyleValues:any;
  usageGuideStyleValues:any;
  usageGuideHeadTitleStyleValues:any;

  numberStyleValues:any;
  usageGuideTitleStyleValues:any;
  usageGuideTextStyleValues:any;

  bicycleTableStyleValues:any;
  bicycleImgStyleValues:any;
  bicycleLabelStyleValues:any;

  bicycleFirstColumn:any;
  bicycleSecondColumn:any;
  bicycleThirdColumn:any;

  bicycleExplainUnderTableStyleValues:any;
  reservationButtonStyleValues:any;

  selectButtonDivTitleStyleValues:any;
  selectButtonDivStyleValues:any;
  selectButtonStyleValues:any;
  chosenButtonStyleValues:any;

  ////////////////////////////////
  footerLinkDivStyleValues: any;
  footerDivStyleValues: any;

  ebsBottomStyleValues: any;
  designByBottomStyleValues: any;
  scrollTopStyleValues: any;
  footerLinkEachStyleValues: any;
  footerLinkImgStyleValues: any;

  footerLinkFirstEachStyleValues: any;
  footerLinkFirstImgStyleValues: any;
  ////////////////////////////////////

  bicycle = 1;

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    console.log('window.innerWidth:' + window.innerWidth);

    let left = ((0) / 1920) * this.innerWidth;
    let top = ((99 + 32) / 1920) * this.innerWidth;
    let height = ((2488-98)/1920) * this.innerWidth;

    this.mainDivStyleValues = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'object-fit': 'contain',
        'height': height + 'px'
    };

    left = (665 / 1920) * this.innerWidth;
    top = ((0) / 1920) * this.innerWidth;
    let width = (864 / 1920) * this.innerWidth;
    height = (730 / 1920) *  this.innerWidth;

    this.pictureStyleValues = {
        'position': 'absolute',
        'object-fit': 'contain',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height' : height + 'px'
    };

    left = (373 / 1920) * this.innerWidth;
    top = ((290-99) / 1920) * this.innerWidth;
    let fontsize = (60 / 1920) *  this.innerWidth;
    width = ((571 + 30) / 1920) * this.innerWidth; // why safari require additional width?
    this.titleStyleValues = {
        'position': 'absolute',
        'object-fit': 'contain',
        'left': left + 'px',
        'top': top + 'px',
        'font-size' : fontsize + 'px',
        'width': width + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': '1.17',
        'letter-spacing': 'normal',
        'color': '#15181f',
    };

    left = (373 / 1920) * this.innerWidth;
    top = ((254 - 99) / 1920) * this.innerWidth;
    width = ((192 + 50 )/ 1920) * this.innerWidth; // why safari require additional width?
    fontsize = (24/ 1920) *  this.innerWidth;
    this.introduceStyleValues= {
        'position': 'absolute',
        'object-fit': 'contain',
        'left': left + 'px',
        'top': top + 'px',
        'font-size' : fontsize + 'px',
        'width': width + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#969eac',
    };

    left = (373 / 1920) * this.innerWidth;
    top = ((502 - 99) / 1920) * this.innerWidth;
    fontsize = (22/ 1920) *  this.innerWidth;
    width = ((378 + 50)/ 1920) * this.innerWidth; // why safari require additional width?

    this.noticeStyleValues ={
        'position': 'absolute',
        'object-fit': 'contain',
        'left': left + 'px',
        'top': top + 'px',
        'font-size' : fontsize + 'px',
         'width': width + 'px',
        'font-family': 'AppleSDGothicNeo',
        'font-weight': 'normal',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': '1.82',
        'letter-spacing': 'normal',
        'color': '#656a77',
    };
    ///////////////////////////////////////
    left = (370/ 1920) * this.innerWidth;
    top = ((910 - 99) / 1920) * this.innerWidth;
    width = (1920 / 1920) * this.innerWidth;
    height = (50 / 1920) *  this.innerWidth;

    this.explainStyleValues = {
        'position': 'absolute',
        'object-fit': 'contain',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height' : height + 'px'
    };

    fontsize = (18 / 1920) *  this.innerWidth;
    width = ((159) / 1920) * this.innerWidth;
    height = ((50) / 1920) * this.innerWidth;
    let marginright = ((234) / 1920) * this.innerWidth;

    let paddingtop = ( 12/ 1920) * this.innerWidth;
    let paddingbottom = ( 11/ 1920) * this.innerWidth;
    left=(370 / 1920) * this.innerWidth;
    top=((910-98) / 1920) * this.innerWidth;

    this.detailExplainTextStyleValues1 = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        //'height' : height + 'px',
        'object-fit': 'contain',
        'background-color': '#fed24b',
        'font-size' : fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#1d212c',
        'text-align': 'center',
        'vertical-align': 'middle',
        //'padding-left': paddingleft +'px',
        //'padding-right': paddingright +'px',
        'padding-top': paddingtop +'px',
        'padding-bottom': paddingbottom +'px'
    };

    left=(763 / 1920) * this.innerWidth;
    top=((910-98) / 1920) * this.innerWidth;

    this.detailExplainTextStyleValues2 = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',      
        'width': width + 'px',
        //'height' : height + 'px',
        'object-fit': 'contain',
        'background-color': '#fed24b',
        'font-size' : fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#1d212c',
        'text-align': 'center',
        'vertical-align': 'middle',
        //'padding-left': paddingleft +'px',
        //'padding-right': paddingright +'px',
        'padding-top': paddingtop +'px',
        'padding-bottom': paddingbottom +'px'
    };
    
    left=(1156 / 1920) * this.innerWidth;
    top=((910-98) / 1920) * this.innerWidth;
        this.detailExplainTextStyleValues3 = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',          
        'width': width + 'px',
        //'height' : height + 'px',
        'object-fit': 'contain',
        'background-color': '#fed24b',
        'font-size' : fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#1d212c',
        'text-align': 'center',
        'vertical-align': 'middle',
        //'padding-left': paddingleft +'px',
       // 'padding-right': paddingright +'px',
        'padding-top': paddingtop +'px',
        'padding-bottom': paddingbottom +'px'
    };
    left = (406 / 1920) * this.innerWidth;
    top = ((974 - 99) / 1920) * this.innerWidth;
    width = (1920 / 1920) * this.innerWidth;
    height = ((117.8) / 1920) *  this.innerWidth;

    this.explainTextStyleValues = {
        'position': 'absolute',
        'object-fit': 'contain',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height' : height + 'px'
    };

    fontsize = (13 / 1920) *  this.innerWidth;
    width = ((295.6) / 1920) * this.innerWidth;
    height = ((117.8) / 1920) * this.innerWidth;
    left = ((406) / 1920) * this.innerWidth;
    top = ((974-98) / 1920) * this.innerWidth;
    this.detailExplainStyleValues1 = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
        'object-fit': 'contain',
        'font-size': fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': '300',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': '1.85',
        'letter-spacing': 'normal',
    };

    left = ((799) / 1920) * this.innerWidth;
    top = ((974-98) / 1920) * this.innerWidth;
    this.detailExplainStyleValues2 = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
        'object-fit': 'contain',
        'font-size': fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': '300',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': '1.85',
        'letter-spacing': 'normal',
    };

    left = ((1193) / 1920) * this.innerWidth;
    top = ((974-98) / 1920) * this.innerWidth;
    this.detailExplainStyleValues3 = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
        'object-fit': 'contain',
        'font-size': fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': '300',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': '1.85',
        'letter-spacing': 'normal',
    };

    fontsize = (20 / 1920) *  this.innerWidth;
    left = ((369) / 1920) * this.innerWidth;
    top = ((1212 - 98) / 1920) * this.innerWidth;
    width = ((79) / 1920) * this.innerWidth; 
    height = ((29) / 1920) * this.innerWidth;

    this.usageGuideHeadTitleStyleValues = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'object-fit': 'contain',
        'font-size': fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color':'#4f4f4f',
        'width': width + 'px',
        'height': height + 'px',
    };

    left = ((369) / 1920) * this.innerWidth;
    top = ((1261-98) / 1920) * this.innerWidth;
    width = ((1159) / 1920) * this.innerWidth; 
    height = ((436) / 1920) * this.innerWidth;
    let paddingright =  ((49) / 1920) * this.innerWidth; // 왜 49가 필요한지 모르겠다 ㅜㅜ 
    paddingbottom =  ((27) / 1920) * this.innerWidth;

    let borderwidth = ((5) / 1920) * this.innerWidth;
    this.usageGuideStyleValues = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
        'object-fit': 'contain',
        'background-color': '#edf4f6',
        'border-top':'solid '+ borderwidth + 'px #00227e',
        'padding-right': paddingright+'px',
        'padding-bottom': paddingbottom+'px'
    };

    let paddingleft = ((41) / 1920) * this.innerWidth;
    paddingtop = ((64) / 1920) * this.innerWidth;
    fontsize =  ((18) / 1920) * this.innerWidth;
    this.numberStyleValues={
        'object-fit': 'contain',
        'font-size': fontsize + 'px',
        'font-family': 'Campton-DEMO',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color':'#00227e',        
        'padding-left': paddingleft +'px',
        'padding-top': paddingtop +'px',
        'padding-bottom': '0px'
        
    };

    paddingleft = ((49) / 1920) * this.innerWidth;
    paddingtop = ((23) / 1920) * this.innerWidth;
    fontsize =  ((22) / 1920) * this.innerWidth;

    this.usageGuideTitleStyleValues = {
        'object-fit': 'contain',
        'font-size': fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color':'#00227e',
        'padding-left': paddingleft +'px',
        'padding-top': paddingtop +'px',
        'padding-bottom': '0px',

//        'background-size': '100% 50%',
//        'background-image': 'url(\"\")',
//        'background-color': '#fff',
//        'background-repeat': 'no-repeat'

    };

    fontsize =  ((13) / 1920) * this.innerWidth;
    paddingleft = ((49) / 1920) * this.innerWidth;
    paddingtop = ((34) / 1920) * this.innerWidth;
    width=((174) / 1920) * this.innerWidth;
    this.usageGuideTextStyleValues = {
        'object-fit': 'contain',
        'font-size': fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': '300',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': '1.85',
        'letter-spacing': 'normal',
        'color':'#848894',
        'padding-left': paddingleft +'px',
        'padding-top': paddingtop +'px',
         'width': width + 'px'
    };

   left = ((793) / 1920) * this.innerWidth;
    top = ((1964-98) / 1920) * this.innerWidth;
    width = ((735) / 1920) * this.innerWidth; 
    height = ((2203 - 1964 + 4) / 1920) * this.innerWidth;

    borderwidth = ((3) / 1920) * this.innerWidth;
    this.bicycleTableStyleValues = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
        'object-fit': 'contain',
        'border-top':'solid '+ borderwidth + 'px #00227e',
        'border-bottom':'solid 1px #9b9b9b',

    };


    left = ((369) / 1920) * this.innerWidth;
    top = ((2002-98) / 1920) * this.innerWidth;
    width = ((349) / 1920) * this.innerWidth; 
    height = ((220) / 1920) * this.innerWidth;
   this.bicycleImgStyleValues={
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
        'object-fit': 'contain',
   }

////////////////////////////////////////////////////   
    fontsize =  ((14) / 1920) * this.innerWidth;
    paddingleft = ((0) / 1920) * this.innerWidth;
    paddingtop = ((2000 - 1967) / 1920) * this.innerWidth;
    width=((52) / 1920) * this.innerWidth;
    //height = ((174) / 1920) * this.innerWidth;

   this.bicycleLabelStyleValues = {
        'object-fit': 'contain',
        'font-size': fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color':'#4f4f4f',
        'padding-left': paddingleft +'px',
        'padding-top': paddingtop +'px',
         'width': width + 'px'
   };

///////////////////////////////////////////////////////////
    fontsize =  ((14) / 1920) * this.innerWidth;
    paddingleft = ((0) / 1920) * this.innerWidth;
    paddingtop = ((2000 - 1967) / 1920) * this.innerWidth;
    width = ((1020 - 852) / 1920) * this.innerWidth;
    this.bicycleFirstColumn ={
        'object-fit': 'contain',
        'font-size': fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': '300',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color':'#4f4f4f',
        'padding-left': paddingleft +'px',
        'padding-top': paddingtop +'px',
         'width': width + 'px'
    };

    fontsize =  ((14) / 1920) * this.innerWidth;
    paddingleft = ((0) / 1920) * this.innerWidth;
    paddingtop = ((2000 - 1967) / 1920) * this.innerWidth;
    width = ((1279-1083) / 1920) * this.innerWidth;
    this.bicycleSecondColumn ={
        'object-fit': 'contain',
        'font-size': fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': '300',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color':'#4f4f4f',
        'padding-left': paddingleft +'px',
        'padding-top': paddingtop +'px',
         'width': width + 'px'
    };

    fontsize =  ((14) / 1920) * this.innerWidth;
    paddingleft = ((0) / 1920) * this.innerWidth;
    paddingtop = ((2000 - 1967) / 1920) * this.innerWidth;
    width = ((160) / 1920) * this.innerWidth;
    this.bicycleThirdColumn ={
        'object-fit': 'contain',
        'font-size': fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': '300',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color':'#4f4f4f',
        'padding-left': paddingleft +'px',
        'padding-top': paddingtop +'px',
         'width': width + 'px'
    };

    fontsize = (13 / 1920) *  this.innerWidth;
    width = ((735.5) / 1920) * this.innerWidth;
    height = ((105.8) / 1920) * this.innerWidth;
    left = ((792) / 1920) * this.innerWidth;
    top = ((2232-98) / 1920) * this.innerWidth;

    this.bicycleExplainUnderTableStyleValues = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
        'object-fit': 'contain',
        'font-size': fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': '300',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': '1.85',
        'letter-spacing': 'normal',
        'color': '#848894'
    };

    fontsize = (14 / 1920) *  this.innerWidth;
    width = ((200) / 1920) * this.innerWidth;
    height = ((50-15) / 1920) * this.innerWidth;
    left = ((1328) / 1920) * this.innerWidth;
    top = ((2370-98) / 1920) * this.innerWidth;
    paddingtop =((15) / 1920) * this.innerWidth;
    this.reservationButtonStyleValues = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
        'object-fit': 'contain',
        'font-size': fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#ffffff',
        'background-color': '#00227e',
        'text-align': 'center',
        'padding-top': paddingtop +'px'
    };

/////////////////////////////////////////////////////////
    left =  ((0) ) * this.innerWidth;
    top =  ((2488 ) / 1920) * this.innerWidth;
    width =  (1920 / 1920) * this.innerWidth;
    height =  ((120) / 1920) * this.innerWidth;
    this.footerLinkDivStyleValues = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
        'object-fit': 'contain',
        'background-color': 'white'
    };

    left =  ((0) ) * this.innerWidth;
    top =  ((2608 ) / 1920) * this.innerWidth;
    width =  (1920 / 1920) * this.innerWidth;
    height =  ((80) / 1920) * this.innerWidth;

    this.footerDivStyleValues = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
        'object-fit': 'contain',
        'background-color': '#383838'
    };

    left =  ((378.5)/ 1920) * this.innerWidth;
    top =  ((20 ) / 1920) * this.innerWidth;
    width =  (46 / 1920) * this.innerWidth;
    height =  ((34) / 1920) * this.innerWidth;
    this.ebsBottomStyleValues = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
        'object-fit': 'contain',
    };

    left =  ((877) / 1920) * this.innerWidth;
    top =  ((29 ) / 1920) * this.innerWidth;
    width =  (166 / 1920) * this.innerWidth;
    height =  ((24) / 1920) * this.innerWidth;
    this.designByBottomStyleValues = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
        'object-fit': 'contain',
    };

    fontsize = (16 / 1920) * this.innerWidth;
    marginright = ( 42 / 1920) * this.innerWidth;
    let margintop = (48 / 1920) * this.innerWidth;
    this.footerLinkEachStyleValues = {
        'font-size': fontsize + 'px',
        'object-fit': 'contain',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#4f4f4f',
        'text-align': 'center',
        'margin-right': marginright + 'px',
        'margin-top': margintop + 'px'
    };

    let marginleft =  (379 / 1920) * this.innerWidth;
    this.footerLinkFirstEachStyleValues = {
        'font-size': fontsize + 'px',
        'object-fit': 'contain',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#4f4f4f',
        'text-align': 'center',
        'margin-right': marginright + 'px',
        'margin-top': margintop + 'px',
        'margin-left': marginleft + 'px'
    };

    width =  (16 / 1920) * this.innerWidth;
    height =  ((16) / 1920) * this.innerWidth;
    marginright = ( 40 / 1920) * this.innerWidth;
    margintop = ( 52 / 1920) * this.innerWidth;
    this.footerLinkImgStyleValues = {
        'width': width + 'px',
        'height': height + 'px',
        'object-fit': 'contain',
        'margin-right': marginright + 'px',
        'margin-top': margintop + 'px'
    };

    marginleft =  (605.5 / 1920) * this.innerWidth;
    this.footerLinkFirstImgStyleValues = {
        'width': width + 'px',
        'height': height + 'px',
        'object-fit': 'contain',
        'margin-right': marginright + 'px',
        'margin-top': margintop + 'px',
        'margin-left': marginleft + 'px'
    };

    fontsize = (20 / 1920) *  this.innerWidth;
    width = ((97) / 1920) * this.innerWidth;
    height = ((29) / 1920) * this.innerWidth;
    left = ((368) / 1920) * this.innerWidth;
    top = ((1794 - 98) / 1920) * this.innerWidth;
    this.selectButtonDivTitleStyleValues = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
        'object-fit': 'contain',
        'font-size': fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#4f4f4f',
    };

    width = ((1920) / 1920) * this.innerWidth;
    height = ((24) / 1920) * this.innerWidth;
    left = ((368) / 1920) * this.innerWidth;
    top = ((1843 - 98) / 1920) * this.innerWidth;
    this.selectButtonDivStyleValues = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
        'object-fit': 'contain'
    };

    height = ((24) / 1920) * this.innerWidth;
    fontsize = (16 / 1920) *  this.innerWidth;
    marginright = ((26) / 1920) * this.innerWidth;
    this.selectButtonStyleValues = {
        'height': height + 'px',
        'object-fit': 'contain',
        'font-size': fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#4f4f4f',
        'margin-right': marginright +'px',
        'text-align': 'left',
        'border':'none'
    };

    let borderbottom = (5 / 1920) *  this.innerWidth;
    this.chosenButtonStyleValues = {
        'height': height + 'px',
        'object-fit': 'contain',
        'font-size': fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#4f4f4f',
        'margin-right': marginright +'px',
        'text-align': 'left',
        'border-top':'none',
        'border-left':'none',
        'border-right':'none',
        'border-bottom':'solid '+ borderbottom +'px #fed24b'
    };

  }

  chooseBicycle(bicycle){
      console.log('bicycle:' + bicycle);
    this.bicycle = bicycle;
  }
}

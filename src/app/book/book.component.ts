import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  mainDivStyleValues:any;
  bookLabelStyleValues:any;
  leftColumnStyleValues:any;
  rightColumnStyleValues:any;
  mapDivStyleValues:any;
  refreshImg:any;
  leftColumnLength:any;
  leftColumnLengthCss:any;

  paddingLeftLengthCss:any;

  jejuStationNameStyleValues:any;
  jejuStationNumberStyleValues:any;
  jejuStationNameHeightCss:any;

  ////////////////////////////////////
  bicycleSectionsWhole:any;
  eachBicycleImgSection:any;
  bicycleLabel:any;
  bicycleImg:any;
  availableText:any;
  rentalLabel:any;
  decLabel:any;
  numCountStyle:any;
  incLabel:any;
  addCart:any;

  availableLabel:any;
  backgroundDiv:any;

  parttimeTableStyle:any;
  rentalTableStyle:any;
  totalTableStyle:any;
  arbeit:any;
  bicyclePaddingleftCss:any;

  borderTHBottom:any;
  tableBoldBlueStyle:any;
  headerStyle:any;
  addressStyle:any;
  stationNameFontStyle:any;
  morethanImgStyle:any;
  horizonalLineStyle:any;
  reservationConfirmLabelStyle:any;
  lentalLabelStyle:any;
  headerHeightStyle:any;
  paymentCellStyle:any;

  paymentButtonStyle:any;
  changeButtonStyle:any;
  numCountStyleInTable:any;

  //////////////////////////////////
    reservationButtonStyleValues:any;
    parttimeButtonStyleValues:any;
    maskStyleValues:any;

    brandStyleValues:any;
    ebsStyleValues:any;
    actionBoxStyleValues:any;

    numberStyleValues:any;
    labelStyleValues:any;

    searchButtonStyleValues:any;
    dropDownStoresStyleValues:any;
    storeSelectStyleValues:any;
    stationNameButtonStyleValues:any;
    dropDownStoresHidden = false;
    locale = 'ko';

    datePickerStyleValues:any;
    timePickerStyleValues:any;

    rangeStyleValues:any;
    labelPaymentStyleValues:any;

    ebsUnchosenStyleValues:any;
    ebsChosenStyleValues:any;
   
    navHeight = -98;
    public action = 'reservation';

    public stores = [];
    public store = '';
    public dateInput;
    public timeInput;
    public bicycleInput = 'EBS-1';
    public distanceInput = '1km';

    public payment = 3500 ;
    serverAddress = 'https://oivj1k7l1m.execute-api.ap-northeast-2.amazonaws.com/latest';
  ///////////////////////////////////
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


  innerWidth;

  lat = 33.499597; // 제주시청 위치
  lng = 126.531254;
  public zoom = 12;

  constructor( private localeService: BsLocaleService , public httpClient: HttpClient) { 
    const date = new Date();
    this.dateInput = moment(date).format('YYYY-MM-DD');
    this.timeInput = moment(date).format('HH:mm');
    console.log(this.dateInput);
    console.log(this.timeInput);
    this.localeService.use(this.locale);
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    console.log('window.innerWidth:' + window.innerWidth);
    let left = ((0) / 1920) * this.innerWidth;
    let top = ((99 + 32) / 1920) * this.innerWidth;
    let height = ((2253 - 98)/ 1920) * this.innerWidth;
    let paddingleft = (370/1920) * this.innerWidth;

    this.mainDivStyleValues = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'object-fit': 'contain',
        'height': height + 'px',
        'padding-left': paddingleft + 'px'
    };

    let paddingbottom = ((15) / 1920) * this.innerWidth;
    let fontsize = ((18) / 1920) * this.innerWidth;
    this.bookLabelStyleValues = {
        'padding-bottom': paddingbottom + 'px',
        'font-size' : fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#4f4f4f',
    };

    let width = ((864) / 1920) * this.innerWidth;
    this.leftColumnStyleValues = {
        'width': width + 'px',
    };
    this.leftColumnLength = width;
    this.leftColumnLengthCss = width +'px';

    width = ((274) / 1920) * this.innerWidth;
    let marginleft=((21) / 1920) * this.innerWidth;
    let marginright = ((379) / 1920) * this.innerWidth;
    this.rightColumnStyleValues = {
        'width': width + 'px',
        'margin-left':marginleft + 'px',
        'margin-right':marginright+'px'
    };

    height = ((470) / 1920) * this.innerWidth;

    this.mapDivStyleValues = {
       'width': this.leftColumnLength + 'px',
       'height': height +'px'
    };

    width = ((12) / 1920) * this.innerWidth;
    height = ((12) / 1920) * this.innerWidth;
    paddingleft = ((17) / 1920) * this.innerWidth;

    this.refreshImg={
       'width': width + 'px',
       'height': height +'px',
        'padding-left': paddingleft+'px',
    };

    fontsize = ((18) / 1920) * this.innerWidth;
    height = ((70) / 1920) * this.innerWidth;
    paddingleft = ((42) / 1920) * this.innerWidth;

    this.jejuStationNameHeightCss= height+'px';
    this.jejuStationNameStyleValues = {
        'font-size' : fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#4f4f4f',
        'padding-left': paddingleft+'px',
       // 'height': height +'px'
    };
    fontsize = ((14) / 1920) * this.innerWidth;

    paddingleft = ((6) / 1920) * this.innerWidth;
    this.jejuStationNumberStyleValues={
        'font-size' : fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': '300',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#4f4f4f',
        'padding-left': paddingleft+'px',
    };

    paddingleft = ((43) / 1920) * this.innerWidth;
    width =  this.leftColumnLength - paddingleft;
    this.bicycleSectionsWhole={
        'padding-left': paddingleft+'px',
        'width': width + 'px',
    };

    width=((247) / 1920) * this.innerWidth;
    height=((280) / 1920) * this.innerWidth;
    let paddingright =((20) / 1920) * this.innerWidth;
    let marginbottom =((10) / 1920) * this.innerWidth;
    this.eachBicycleImgSection={
       'width': width + 'px',
       'height': height +'px',
       'background-color':'#ffffff',
       'margin-right': paddingright+'px',
//       'margin-bottom': marginbottom+'px'
    };

    width=((88.1) / 1920) * this.innerWidth;
    height=((35) / 1920) * this.innerWidth;
    fontsize = ((16) / 1920) * this.innerWidth;
    paddingleft = ((22) / 1920) * this.innerWidth;
    this.bicyclePaddingleftCss=paddingleft+'px';

    this.bicycleLabel={
       'width': width + 'px',
       'height': height +'px',
       'background-color':'fed24b',
        'font-size' : fontsize + 'px',
        'font-family': 'PierSans',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#ffffff',
        //'padding-left':paddingleft+'px',
        //'tex-align':'center'
    };
    width=((164) / 1920) * this.innerWidth;
    height=((102) / 1920) * this.innerWidth;

    let paddingtop=((73-35) / 1920) * this.innerWidth;
    paddingbottom= ((105-19-48)/1920) * this.innerWidth;
    paddingleft = ((40)/1920) * this.innerWidth;
    this.bicycleImg={
       'width': width + 'px',
       'height': height +'px',
        'padding-left': paddingleft+'px',
        'padding-top': paddingtop+'px',
        'padding-bottom': paddingbottom+'px'
    };

    fontsize = ((13) / 1920) * this.innerWidth;
    paddingbottom= ((8)/1920) * this.innerWidth;    
    this.availableText={
        'font-size' : fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'normal',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#4f4f4f',
        'text-align':'center',
        'padding-bottom': paddingbottom+'px'
    };

    width = ((573-200) / 1920) * this.innerWidth;
    height = ((40-12) / 1920) * this.innerWidth;
    paddingleft =((29) / 1920) * this.innerWidth;
    paddingtop = ((12) / 1920) * this.innerWidth;
    this.rentalLabel={
       'width': width + 'px',
       'height': height +'px',
        'padding-top': paddingtop + 'px',
        'padding-left':  paddingleft + 'px',               
        'font-size' : fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#ffffff',
    };
    width = ((15+13) / 1920) * this.innerWidth;
    height = ((40) / 1920) * this.innerWidth;
    paddingtop = ((18.8) / 1920) * this.innerWidth;
    paddingright =((13) / 1920) * this.innerWidth;
    this.decLabel={
       'width': width + 'px',
       'height': height +'px',
        //'padding-top': paddingtop + 'px',
        'padding-right' : paddingright+'px',
        'font-size' : fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#ffffff',        
    };
    this.incLabel={
       'width': width + 'px',
       'height': height +'px',
       //'padding-top': paddingtop + 'px',
         'font-size' : fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#ffffff',
    };

    width = ((15) / 1920) * this.innerWidth;
    height = ((40-12) / 1920) * this.innerWidth;
    fontsize = ((13) / 1920) * this.innerWidth;
    paddingtop = ((12) / 1920) * this.innerWidth;
    paddingleft = ((13) / 1920) * this.innerWidth;
    paddingright = ((13) / 1920) * this.innerWidth;
    
    this.numCountStyle ={
         'width': width + 'px',
         'height': height +'px',
        'padding-top': paddingtop + 'px',         
        'font-size' : fontsize + 'px',
        'font-family': 'Campton-DEMO',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#ffffff',
        'padding-left': paddingleft +'px',
        'padding-right' : paddingright+'px'
    };

    width = ((15) / 1920) * this.innerWidth;
    height = ((40) / 1920) * this.innerWidth;
    paddingleft = ((13) / 1920) * this.innerWidth;
    paddingright = ((13) / 1920) * this.innerWidth;  
    this.addCart = {
       'width': width + 'px',
       'height': height +'px',
        'font-size' : fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#ffffff',
        'padding-left': paddingleft +'px',
        'padding-right' : paddingright+'px'
    };

    width = ((71) / 1920) * this.innerWidth;
    height = ((27) / 1920) * this.innerWidth;
    fontsize = ((18) / 1920) * this.innerWidth;
    paddingleft =((43) / 1920) * this.innerWidth;
    paddingtop = ((30) / 1920) * this.innerWidth;
    paddingbottom = ((70-30-27)/1920)*this.innerWidth;

    this.availableLabel = {
        'padding-top': paddingtop + 'px',
        'padding-left':  paddingleft + 'px',
        'padding-bottom': paddingbottom + 'px',
       //'width': width + 'px',
       'height': height +'px',
        'font-size' : fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#4f4f4f',
    };
    height = ((832) / 1920) * this.innerWidth;
    this.backgroundDiv={
       'width': '100%',
       'height': height +'px',
    }

    marginbottom= ((35)/1920)*this.innerWidth;
    marginleft= ((41)/1920)*this.innerWidth;
    width   = ((780)/1920)*this.innerWidth;
    height  = ((269)/1920)*this.innerWidth;
    fontsize =((12)/1920)*this.innerWidth;
    let borderlength = ((3)/1920)*this.innerWidth;
    this.parttimeTableStyle={
       'font-size' : fontsize + 'px',
       'background-color':'white',
       'width': width + 'px',
       'height': height +'px',
        'margin-left':  marginleft + 'px',
        'margin-bottom': marginbottom + 'px',
        'border-top':' solid '+borderlength+'px '+'#00227e'
    };

    marginbottom= ((20)/1920)*this.innerWidth;
    marginleft= ((41)/1920)*this.innerWidth;
    width   = ((780)/1920)*this.innerWidth;
    height  = ((154+ 40)/1920)*this.innerWidth;
    fontsize =((12)/1920)*this.innerWidth;
    borderlength = ((3)/1920)*this.innerWidth;
    this.rentalTableStyle={
       'font-size' : fontsize + 'px',
       'background-color':'white',
       'width': width + 'px',
       'height': height +'px',
        'margin-left':  marginleft + 'px',
        'margin-bottom': marginbottom + 'px',
        'border-top':' solid '+borderlength+'px '+'#00227e'
    };

    marginbottom= ((73)/1920)*this.innerWidth;
    marginleft= ((41)/1920)*this.innerWidth;
    width   = ((780)/1920)*this.innerWidth;
    height  = ((89)/1920)*this.innerWidth;
    fontsize =((12)/1920)*this.innerWidth;
    borderlength = ((3)/1920)*this.innerWidth;
    this.totalTableStyle={
       'font-size' : fontsize + 'px',
       'background-color':'white',
       'width': width + 'px',
       'height': height +'px',
        'margin-left':  marginleft + 'px',
        'margin-bottom': marginbottom + 'px',
        'border-top':' solid '+borderlength+'px '+'#00227e'
    };

    marginleft= ((41)/1920)*this.innerWidth;
    fontsize= ((18)/1920)*this.innerWidth;
    marginbottom= ((10)/1920)*this.innerWidth;
    let margintop=  ((50)/1920)*this.innerWidth;

    this.arbeit={
        'padding-top':  margintop + 'px',      
        'padding-left':  marginleft + 'px',
        'padding-bottom': marginbottom + 'px',
        'font-size' : fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#4f4f4f',
    };
    
    this.headerStyle={
        'font-family': 'NotoSansCJKkr',
        'font-weight': '300',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#000000',
    };

    let borderbottom=((8)/1920)*this.innerWidth;
    this.borderTHBottom={
        'border-top':'solid '+ borderbottom +'px'+ '#f2f7f8'
    };

    this.tableBoldBlueStyle ={
        'font-family': 'Campton-DEMO',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#00227e',
    };

    fontsize = ((9)/1920) * this.innerWidth;
    this.addressStyle = {
        'font-size' : fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'normal',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': '1.44',
        'letter-spacing': 'normal',
        'color': '#000000',
    };

    fontsize = ((14)/1920) * this.innerWidth;
    this.stationNameFontStyle = {
        'font-size' : fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': '500',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': '1.44',
        'letter-spacing': 'normal',
        'color': '#000000',
    };

    width = ((9) / 1920) * this.innerWidth;
    height = ((14) / 1920) * this.innerWidth;
    marginright= ((30) / 1920) * this.innerWidth;
    this.morethanImgStyle={
       'width': width + 'px',
       'height': height +'px',
       'color': '#00227e',
       'padding-right':marginright+'px'
    };

    height= ((6) / 1920) * this.innerWidth; 
    this.horizonalLineStyle = {
      'background-color':'#fed24b',
      'height': height + 'px'
    };

    paddingleft=((44) / 1920) * this.innerWidth; 
    paddingtop =((32) / 1920) * this.innerWidth; 
    paddingbottom =((30) / 1920) * this.innerWidth; 

    fontsize=((20) / 1920) * this.innerWidth; 
    this.reservationConfirmLabelStyle={
        'font-size' : fontsize + 'px',
        'font-family': 'AppleSDGothicNeo',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#00227e',
        'padding-left': paddingleft + 'px',
        'padding-top' : paddingtop + 'px',
        'padding-bottom': paddingbottom + 'px',
    };
    fontsize=((20) / 1920) * this.innerWidth; 
    paddingleft=((43) / 1920) * this.innerWidth; 
    paddingbottom = ((10) / 1920) * this.innerWidth;
    this.lentalLabelStyle={
        'font-size' : fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#4f4f4f',
        'padding-left': paddingleft + 'px',
        'padding-bottom': paddingbottom + 'px',
    };
    height=((42) / 1920) * this.innerWidth; 
    this.headerHeightStyle={
      'height': height + 'px'
    };
    paddingright=((441) / 1920) * this.innerWidth;
    this.paymentCellStyle={
        'padding-right': paddingright + 'px',
    };

    width=((200) / 1920) * this.innerWidth;
    height=((50) / 1920) * this.innerWidth;
    fontsize=((14) / 1920) * this.innerWidth;
    left = ((992-370)/1920) * this.innerWidth;
    top  = ((89-25)/1920) * this.innerWidth;
    marginbottom = ((89-25)/1920) * this.innerWidth;
    this.paymentButtonStyle={
       'position':'absolute',
       'top':top+'px',
       'left':left+'px',
       'width': width + 'px',
       'height': height +'px',
        'font-size' : fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'text-align': 'center',
        'color': '#ffffff',
        'border':'0px',
        'background-color':'#00227e'
    };

   fontsize= (12/ 1920) * this.innerWidth;
   this.numCountStyleInTable = {
        'font-size': fontsize + 'px',
        'object-fit': 'contain',
        'font-family': 'Campton-DEMO',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
         'text-align': 'center',
        'color': '#00227e'
    };

    width=((39) / 1920) * this.innerWidth;
    height=((18) / 1920) * this.innerWidth;
    this.changeButtonStyle = {
       'width': width + 'px',
       'height': height +'px',
       'background-color':'#00227e',
        'font-size': fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
         'text-align': 'center',
        'color': '#ffffff',
        'padding':'0px',
        'margin':'0px',
        'border':'0px'
    };

/////////////////////////////////////////////////////////
    left =  ((0) ) * this.innerWidth;
    top =  ((2253-98 ) / 1920) * this.innerWidth;
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
    top =  ((2253-98 ) / 1920) * this.innerWidth;
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
    margintop = (48 / 1920) * this.innerWidth;
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

    marginleft =  (379 / 1920) * this.innerWidth;
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



/////////////////////////////////////////////////////////////////
    fontsize = (14 / 1920) * this.innerWidth;
    width = (137 / 1920) * this.innerWidth;
    height = (40 / 1920) *  this.innerWidth;
    this.reservationButtonStyleValues = {
        'object-fit': 'contain',
        'background-color': '#00227e',
        'font-size' : fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': '500',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#ffffff',
        'width': width + 'px',
        'height' : height + 'px'
    };
    this.parttimeButtonStyleValues = {
        'object-fit': 'contain',
        'background-color': '#ffffff',
        'font-size' : fontsize + 'px',
        'font-family': 'NotoSansCJKkr',
        'font-weight': '500',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#4f4f4f',
        'width': width + 'px',
        'height' : height + 'px'
    };
    top = (99 / 1920) * this.innerWidth;
    height = (730 / 1920 ) * this.innerWidth;
    this.maskStyleValues = {
        'height': height + 'px',
        'position': 'absolute',
        'width': this.innerWidth + 'px',
        'top': top + 'px',
        'left': '0px',
    };
    left =  (691 / 1920) * this.innerWidth;
    top =  ((330 + this.navHeight) / 1920) * this.innerWidth;
    width =  (541 / 1920) * this.innerWidth;
    height =  (160 / 1920) * this.innerWidth;
    fontsize = (80 / 1920) * this.innerWidth;
    this.brandStyleValues = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
        /*
        'object-fit': 'contain',
        'font-family': 'Campton-DEMO',
        'font-size': fontsize + 'px',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': '1',
        'letter-spacing': '-0.1px',
        */
        'text-align': 'center',
        'color': '#ffffff'
    };

    left =  (884 / 1920) * this.innerWidth;
    top =  ((490 + this.navHeight) / 1920) * this.innerWidth;
    width =  (154 / 1920) * this.innerWidth;
    height =  (24 / 1920) * this.innerWidth;
    this.ebsStyleValues = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
        'text-align': 'center',
        'color': '#ffffff'
    };

    width =  ((274 - 40)/ 1920) * this.innerWidth;
    height =  ((318 - 40)/ 1920) * this.innerWidth;
    const border = (3 / 1920) * this.innerWidth;
    let padding = (20 / 1920) * this.innerWidth;
    this.actionBoxStyleValues = {
        'position': 'relative',
        'width': width + 'px',
        'height': height + 'px',
        'object-fit': 'contain',
        'background-color': '#ffffff',
        'border': 'solid ' + border + 'px  #00227e',
         'padding': padding+'px'
    };

    fontsize = (18 / 1920) * this.innerWidth;
    this.numberStyleValues = {
        'font-family': 'Campton-DEMO',
        'font-size': fontsize + 'px',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#00227e'
    };

    fontsize = (15 / 1920) * this.innerWidth;
    this.labelStyleValues = {
        'object-fit': 'contain',
        'font-family': 'NotoSansCJKkr',
        'font-size': fontsize + 'px',
        'font-weight': '300',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#4f4f4f'
    };

    fontsize = (15 / 1920) * this.innerWidth;
    padding = (60 / 1920) * this.innerWidth;
    marginbottom =  (25 / 1920) * this.innerWidth;
    width =  (50 / 1920) * this.innerWidth;
    this.labelPaymentStyleValues = {
        'object-fit': 'contain',
        'font-family': 'NotoSansCJKkr',
        'font-size': fontsize + 'px',
        'font-weight': '300',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#4f4f4f',
        'width': width+'px',
        'margin-left': padding+'px',
        'margin-right': padding+'px',
        'margin-bottom':marginbottom+'px'        
    };

    fontsize = (12 / 1920) * this.innerWidth;
    width =  (224 / 1920) * this.innerWidth;
    height =  (32 / 1920) * this.innerWidth;
    this.searchButtonStyleValues = {
        'width': width + 'px',
        'height': height + 'px',
        'object-fit': 'contain',
        'background-color': '#00227e',
        'font-family': 'NotoSansCJKkr',
        'font-size': fontsize + 'px',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#ffffff',
        'text-align': 'center',
        'border': 'none'
    };

    fontsize = (15 / 1920) * this.innerWidth; // 디자인에 지정되어 있지 않음.
    width =  (224 / 1920) * this.innerWidth;
    height =  (32 / 1920) * this.innerWidth;

    margintop =  (6 / 1920) * this.innerWidth;
    marginbottom =  (25 / 1920) * this.innerWidth;

    this.storeSelectStyleValues = {
        'width': width + 'px',
        'height': height + 'px',
        'object-fit': 'contain',
        'font-family': 'NotoSansCJKkr',
        'font-size': fontsize + 'px',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'border': 'solid 1px #eaeaea',
        'margin-top': margintop+'px',
        'margin-bottom':marginbottom+'px'
    };

    width =  ((260) / 1920) * this.innerWidth;
    height =  ((100 ) / 1920) * this.innerWidth; 
    this.dropDownStoresStyleValues = {
        'object-fit': 'contain',
        'width': width + 'px',
        'height': height + 'px',
        'background-color': 'white'
    };

    width =  ((260) / 1920) * this.innerWidth;
    height =  ((32 ) / 1920) * this.innerWidth; 
    fontsize = (12 / 1920) * this.innerWidth;
   this.stationNameButtonStyleValues = {
        'object-fit': 'contain',
        'width': width + 'px',
        'height': height + 'px',
        'border':'none',
        'text-align': 'left',
        'background-color': 'white',
        'font-size': fontsize + 'px'
   };


    fontsize = (12 / 1920) * this.innerWidth; // 디자인에 지정되어 있지 않음.
    width =  (113 / 1920) * this.innerWidth;
    height =  (32 / 1920) * this.innerWidth;
    margintop =(6 / 1920) * this.innerWidth;
    marginbottom =  (25 / 1920) * this.innerWidth;

    this.datePickerStyleValues = {
        'width': width + 'px',
        'height': height + 'px',
        'object-fit': 'contain',
        // 'background-color': '#00227e',
        'font-family': 'NotoSansCJKkr',
        'font-size': fontsize + 'px',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        // 'color': '#ffffff',
        'border': 'solid 1px #eaeaea',
        'padding-top': '0px',
        'padding-bottom': '0px',
        'margin-top': margintop+'px',
        'margin-bottom':marginbottom+'px'
        
    };

    fontsize = (12 / 1920) * this.innerWidth; // 디자인에 지정되어 있지 않음.
    width =  (112 / 1920) * this.innerWidth;
    height =  (32 / 1920) * this.innerWidth;
    margintop =(6 / 1920) * this.innerWidth;
    marginbottom =  (25 / 1920) * this.innerWidth;

    this.timePickerStyleValues = {
        'width': width + 'px',
        'height': height + 'px',
        'object-fit': 'contain',
        // 'background-color': '#00227e',
        'font-family': 'NotoSansCJKkr',
        'font-size': fontsize + 'px',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        // 'color': '#ffffff',
        'border': 'solid 1px #eaeaea',
        'margin-top': margintop+'px',
        'margin-bottom':marginbottom+'px'        
    };

    fontsize = (10.3 / 1920) * this.innerWidth; // 디자인에 지정되어 있지 않음.
    width =  (75 / 1920) * this.innerWidth;
    height =  (32 / 1920) * this.innerWidth;
    margintop =(6 / 1920) * this.innerWidth;
    marginbottom =  (18 / 1920) * this.innerWidth;

    this.ebsUnchosenStyleValues = {
        'width': width + 'px',
        'height': height + 'px',
        'object-fit': 'contain',
        'font-family': 'Campton-DEMO',
        'font-size': fontsize + 'px',
        'font-weight': '300',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'text-align': 'center',
        'color': '#eaeaea',
        'background-color': 'white',
        'border': 'solid 1px #eaeaea',
        'margin-top': margintop+'px',
        'margin-bottom':marginbottom+'px'        
    };

    this.ebsChosenStyleValues = {
        'width': width + 'px',
        'height': height + 'px',
        'object-fit': 'contain',
        'font-family': 'Campton-DEMO',
        'font-size': fontsize + 'px',
        'font-weight': '300',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'text-align': 'center',
        'color': '#ffffff',
        'border': '0px',
        'background-color': '#fed24b',
        'margin-top': margintop+'px',
        'margin-bottom':marginbottom+'px'                
    };
    width =(224 / 1920) * this.innerWidth;
   this.rangeStyleValues = {
        'width': width + 'px',
   };
    
/////////////////////////////////////////////////////////////

  }


  reservation() {
    console.log( 'reservation comes' );
     this.parttimeButtonStyleValues['color'] = '#4f4f4f';
     this.parttimeButtonStyleValues['background-color'] = '#ffffff';
     this.reservationButtonStyleValues['color'] = '#ffffff';
     this.reservationButtonStyleValues['background-color'] = '#00227e';
     this.action = 'reservation';
  }

  parttime() {
    console.log( 'parttime comes' );
     this.parttimeButtonStyleValues['color'] = '#ffffff';
     this.parttimeButtonStyleValues['background-color'] = '#00227e';
     this.reservationButtonStyleValues['color'] = '#4f4f4f';
     this.reservationButtonStyleValues['background-color'] = '#ffffff';
     this.action = 'partime'; 
  }

  storeNameInput() {
      if(this.store.length == 0){
          this.stores=[];
      }else if(this.store.length >0){
          console.log('search stations with name');
         this.searchStationsWithName();
      }
      this.dropDownStoresHidden = false;
      console.log('store name input:' + this.store);
  }

  searchStationsWithName(){
      const body = { prefix: this.store };
        this.httpClient.post (this.serverAddress+'/searchStationWithName', body).subscribe((response:any) => {
                console.log('POST Request is successful ' + JSON.stringify(response));
                this.stores = [];
                response.stations.forEach(station => {
                        this.stores.push(station.name);
                });
                console.log('stores:' + JSON.stringify(this.stores));
            }, error => {
                console.log('Error:' + error);
            }
        );
  }

  storeSelect(store) {
      console.log( 'store:' + store);
      this.store = store; 
      this.dropDownStoresHidden = true;
  }

  selectBicycle(bicycle) {
      console.log('selectBicycle:'+this.bicycleInput);
      this.bicycleInput = bicycle;
  }

  selectDistance(distance) {
    this.distanceInput = distance;
  }


  mapReady(){

  }

}

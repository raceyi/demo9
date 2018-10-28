import { Component, ViewChild, OnInit } from '@angular/core';
// https://robby570.tw/Agm-Direction-Docs/source/properties/input.html 참고하기

@Component({
  selector: 'app-event1',
  templateUrl: './event1.component.html',
  styleUrls: ['./event1.component.css']
})
export class Event1Component implements OnInit {
  mainDivStyleValues: any;
  titleStyleValues: any;
  mapDivStyleValues: any;
  public innerWidth: any;
  public zoom = 14;

  public lat = 37.546944;
  public lng = 126.884399;

  // 126.884399, 37.546944
  // 126.9255755, 37.5584769

  public origin: any;
  public destination: any;
  public travelMode = 'TRANSIT'; // 'DRIVING'(x); 구글지도에서 샘플을 잘찾아야만 한다. https://www.google.co.kr/maps/dir/

  inputAddressStyleValues: any;

  course1StyleValues:any;
  courseAlphabet:any;
  courseName:any;
  courseRoute:any;
  courseButton:any;

  course1DivStyleValues:any;
  course2DivStyleValues:any;

  courseInfo1StyleValues:any;
  courseInfoLabel:any;
  courseInfoValue:any;

  courseDetailDiv:any;
  courseDetailLabel:any;
  
  buttonPointStyleValues:any;
  lineDivStyleValues:any;

  course1WidthStyleValues1:any;
  course1WidthStyleValues2:any;
  course1WidthStyleValues3:any;
  course1WidthStyleValues4:any;
  course1WidthStyleValues5:any;
  course1WidthStyleValues6:any;

  course1WidthNameStyleValues1:any;
  course1WidthNameStyleValues2:any;
  course1WidthNameStyleValues3:any;
  course1WidthNameStyleValues4:any;
  course1WidthNameStyleValues5:any;
  course1WidthNameStyleValues6:any;

  explainBoxStyleValues:any;
  explainBoxTextStyleValues:any;

  course2WidthStyleValues1:any;
  course2WidthStyleValues2:any;
  course2WidthStyleValues3:any;
  course2WidthStyleValues4:any;
  course2WidthStyleValues5:any;

  course2WidthNameStyleValues1:any;
  course2WidthNameStyleValues2:any;
  course2WidthNameStyleValues3:any;
  course2WidthNameStyleValues4:any;
  course2WidthNameStyleValues5:any;

  stationNameDivStyleValues:any;
  stationFontSize:any;

  stationNameStyleValues:any;

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

  public renderOptions = {
      suppressMarkers: true,
  };

  public markerOptions = {
      origin: {
          infoWindow: '안양천',
          label: '출발지',
          // icon: 'your-icon-url',
          draggable: true,
      },
      destination: {
          // icon: 'your-icon-url',
          infoWindow: '경의선 숲길',
          label: '도착지',
          opacity: 0.8,
      },
  };

  constructor() {

  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    console.log('window.innerWidth:' + window.innerWidth);

    let left = ((0) / 1920) * this.innerWidth;
    let top = ((99 + 32) / 1920) * this.innerWidth;
    let height = ((1786-98)/1920) * this.innerWidth;

    this.mainDivStyleValues = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'object-fit': 'contain',
        'height': height + 'px'
    };

    left = ( 370 / 1920) * this.innerWidth;
    top =  ((0) / 1920) * this.innerWidth;
    let fontsize = (18 / 1920) * innerWidth;
    let width =  (200 / 1920) * innerWidth;
    this.titleStyleValues = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'font-size': fontsize + 'px',
        'object-fit': 'contain',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#4f4f4f'
    };

    left =  0;
    top =  ((146-98) / 1920) * this.innerWidth;
    width =  (1920 / 1920) * this.innerWidth;
    height =  (505 / 1920) * this.innerWidth;
    this.mapDivStyleValues = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
   };
    this.getDirection();

    left = ( 382 / 1920) * this.innerWidth;
    top =  ((651 - 98) / 1920) * this.innerWidth;
    fontsize = (18 / 1920) * innerWidth;
    width =  (1157 / 1920) * innerWidth;
    height =  (50 / 1920) * this.innerWidth;

   this.inputAddressStyleValues = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
        'font-size': fontsize + 'px',
        'object-fit': 'contain',
        'font-family': 'NotoSansCJKkr',
        'font-weight': '300',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#00227e',
        'background-color': '#fed24b',
        'text-align': 'center',
        'border' : 'none'
   };

    width =  ((1157) / 1920) * innerWidth;
    height =  ((976 + 213 - 843) / 1920) * this.innerWidth;
    left = (380 / 1920) * innerWidth;
    top = ((843 - 98) / 1920) * innerWidth;
    this.course1DivStyleValues={
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
    };

    width =  ((1157) / 1920) * innerWidth;
    height =  ((976 + 213 - 843) / 1920) * this.innerWidth;
    left = (380 / 1920) * innerWidth;
    top = ((1209 - 98) / 1920) * innerWidth;
    this.course2DivStyleValues={
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
    };

    width =  ((1157- 50) / 1920) * innerWidth;
    height =  (50 / 1920) * this.innerWidth;
   // left = ((0) / 1920) * innerWidth;
   // top = (0 / 1920) * innerWidth;
    this.course1StyleValues={
   //     'position': 'absolute',
   //     'left': left + 'px',
   //     'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
        //'background-color': '#7984f3'
    };

    fontsize = (22 / 1920) * innerWidth;
    width =  ((18 + 17 + 18) / 1920) * innerWidth;
    height =  (50 / 1920) * this.innerWidth;
    left =(18 / 1920) * innerWidth;
    top = (16 / 1920) * innerWidth;
    this.courseAlphabet={
        'width': width + 'px',
        'height': height + 'px',
        'font-size': fontsize + 'px',
        'object-fit': 'contain',
        'font-family': 'NotoSansCJKkr',
        'font-weight': '300',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#ffffff',
        'text-align': 'center',
         'padding':'0px',
        'border':'0px'
    };
    fontsize = (18 / 1920) * innerWidth;
    width =  ((67 + 17 + 18 )* 2 / 1920) * innerWidth; //why twice ?
    height =  (50 / 1920) * this.innerWidth;

    this.courseName = {
        'width': width + 'px',
        'height': height + 'px',
        'font-size': fontsize + 'px',
        'object-fit': 'contain',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#ffffff',
        'text-align': 'center',
        'padding':'0px',
        'border':'0px'
    };

    fontsize = (15 / 1920) * innerWidth;
    width =  ((1489-129-30) / 1920) * innerWidth;
    height =  (50 / 1920) * this.innerWidth;

    this.courseRoute = {
        'width': width + 'px',
        'height': height + 'px',
        'font-size': fontsize + 'px',
        'object-fit': 'contain',
        'font-family': 'NotoSansCJKkr',
        'font-weight': '300',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#ffffff',
        'text-align': 'left',
        'padding':'0px',
        'border':'0px'
    };

    left = ((1157- 50) / 1920) * innerWidth;
    top = 0;
    width =  (50 / 1920) * innerWidth;
    height =  ((50 + 7 )/ 1920) * this.innerWidth; //why extra 7?
    this.courseButton = {
       'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
        'object-fit': 'contain',
         'text-align': 'center',
        'padding':'0px',
        'border':'0px'
    };

    width =  ((1157) / 1920) * innerWidth;
    height =  ((83) / 1920) * this.innerWidth;
    left = (65 / 1920) * innerWidth;
    top = ((50) / 1920) * innerWidth;
    this.courseInfo1StyleValues={
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
    };

    fontsize = (14 / 1920) * innerWidth;
    //width =  ((68) / 1920) * innerWidth;
    height =  (20 / 1920) * this.innerWidth;
    let paddingtop =  (20 / 1920) * this.innerWidth;
    this.courseInfoLabel = {
        //'width': width + 'px',
        'height': height + 'px',
        'font-size': fontsize + 'px',
        'object-fit': 'contain',
        'font-family': 'NotoSansCJKkr',
        'font-weight': '300',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#00227e',
        'padding-top': paddingtop + 'px'
 };

    fontsize = (18 / 1920) * innerWidth;
    //width =  ((68) / 1920) * innerWidth;
    height =  (28 / 1920) * this.innerWidth;
    this.courseInfoValue = {
        //'width': width + 'px',
        'height': height + 'px',
        'font-size': fontsize + 'px',
        'object-fit': 'contain',
        'font-family': 'Campton-DEMO',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#00227e',
 };
    left =(0 / 1920) * this.innerWidth;
    top = (133 / 1920) * this.innerWidth;
    width =  ((1157+7) / 1920) * innerWidth;
    height =  (213 / 1920) * this.innerWidth;
    this.courseDetailDiv={
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',      
          'width': width + 'px',
          'height': height + 'px',
          'background-color':'#f9fbfc'
    };
    left = (66 / 1920) * this.innerWidth;
    top =  (11 / 1920) * this.innerWidth;
    fontsize = (18 / 1920) * this.innerWidth;
    this.courseDetailLabel={
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'font-size': fontsize + 'px',
        'object-fit': 'contain',
        'font-family': 'NotoSansCJKkr',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#4f4f4f'
    };

    width = ((23 +10)/ 1920) * this.innerWidth; //extra 10
    height = ((20 +10)/ 1920) * this.innerWidth; //extra 10
    fontsize = (10 / 1920) * this.innerWidth;

    this.buttonPointStyleValues={
         'width': width + 'px',
         'height': height + 'px',
        'font-size': fontsize + 'px',
        'object-fit': 'contain',
        'font-family': 'Campton-DEMO',
        'font-weight': 'bold',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#ffffff',
        'padding': '0px',
        'border': '0px',
        'margin': '0px',
        'background-color': '#7984f3',
        'border-radius': '50%'
    };

    left = (77 / 1920) * this.innerWidth;
    top =  (115 / 1920) * this.innerWidth;
    width =  ((1157- 95 - 77)/ 1920) * this.innerWidth;
    height =  ((30) / 1920) * this.innerWidth;
    this.lineDivStyleValues={
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
    };

    top =  ((115 + 30 )/ 1920) * this.innerWidth;
    this.stationNameDivStyleValues={
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
    };
    
  const circleMargin=0;  
  //const increateRate=1;

  width = ((549 - 457-circleMargin)/ 1920) * this.innerWidth;
  this.course1WidthStyleValues1 = width + 'px';
  console.log("margin1:"+ this.course1WidthStyleValues1);
  //let plus30= width*increateRate;
  let sum = width;
  this.course1WidthNameStyleValues1 = width+'px';
  console.log("course1WidthNameStyleValues1: "+this.course1WidthNameStyleValues1);

  width = ((743-549-circleMargin)/ 1920) * this.innerWidth;
  this.course1WidthStyleValues2=  width + 'px';
  console.log("margin2:"+ this.course1WidthStyleValues2);
  sum+=width;
  this.course1WidthNameStyleValues2 = sum+'px';
  console.log("course1WidthNameStyleValues2: "+this.course1WidthNameStyleValues2);

  width = (( 931 -743-circleMargin)/ 1920) * this.innerWidth;
  this.course1WidthStyleValues3=  width + 'px';
  console.log("margin3:"+ this.course1WidthStyleValues3);
  sum+=width;
  this.course1WidthNameStyleValues3 = sum+'px';
  console.log("course1WidthNameStyleValues3:"+this.course1WidthNameStyleValues3);
  width = ((1111-931-circleMargin)/ 1920) * this.innerWidth;
  this.course1WidthStyleValues4=  width + 'px';  
  console.log("margin4:"+ this.course1WidthStyleValues4);
  sum+=width;
  this.course1WidthNameStyleValues4 = sum+'px';
  console.log("course1WidthNameStyleValues4:"+this.course1WidthNameStyleValues4);

  width = ((1419-1111- 30)/ 1920) * this.innerWidth; //30은 그냥 static한 값이다 ㅜㅜ 
  this.course1WidthStyleValues5=  width + 'px';
  console.log("margin5:"+ this.course1WidthStyleValues5);
  sum+=width;
  this.course1WidthNameStyleValues5 = sum+'px';
  console.log("course1WidthNameStyleValues5:"+this.course1WidthNameStyleValues5);

 width = ((1391-1157)/ 1920) * this.innerWidth;
  this.course1WidthStyleValues6=  width + 'px';
  sum+=width;
  this.course1WidthNameStyleValues6 = sum+'px';
  console.log("course1WidthNameStyleValues6:"+this.course1WidthNameStyleValues6);


   left = (226/ 1920) * this.innerWidth;
   top = (69/ 1920) * this.innerWidth;
   width = (101.4/ 1920) * this.innerWidth;
   height = ((41.2+5) / 1920) * this.innerWidth; // 말풍선 꼬리 크기 추가
   fontsize= (10.4/ 1920) * this.innerWidth;
   paddingtop = (5/ 1920) * this.innerWidth;
   this.explainBoxStyleValues = {
        'position': 'absolute',
        'left': left + 'px',
        'top': top + 'px',
        'width': width + 'px',
        'height': height + 'px',
        'font-size': fontsize + 'px',
        'object-fit': 'contain',
        'font-family': 'NotoSansCJKkr',
        'font-weight': '300', //Is it correct?
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
         'color': '#ffffff',
          'background-color':'#00227e',
         'text-align': 'center',
      };

  this.explainBoxTextStyleValues={
        'width': width + 'px',
        'height': height + 'px',
        'padding-top':paddingtop + 'px'
  };

  // 2번째 코스 값을 계산한다. begin
   width = ((550 - 457-circleMargin)/ 1920) * this.innerWidth;
  this.course2WidthStyleValues1 = width + 'px';
  console.log("margin1:"+ this.course2WidthStyleValues1);
  //let plus30= width*increateRate;
   sum = width;
  this.course2WidthNameStyleValues1 = width+'px';
  console.log("course2WidthNameStyleValues1: "+this.course2WidthNameStyleValues1);

  width = ((840-550-circleMargin)/ 1920) * this.innerWidth;
  this.course2WidthStyleValues2=  width + 'px';
  console.log("margin2:"+ this.course2WidthStyleValues2);
  sum+=width;
  this.course2WidthNameStyleValues2 = sum+'px';
  console.log("course2WidthNameStyleValues2: "+this.course2WidthNameStyleValues2);

  width = (( 1175 -840-circleMargin)/ 1920) * this.innerWidth;
  this.course2WidthStyleValues3=  width + 'px';
  console.log("margin3:"+ this.course2WidthStyleValues3);
  sum+=width;
  this.course2WidthNameStyleValues3 = sum+'px';
  console.log("course2WidthNameStyleValues3:"+this.course2WidthNameStyleValues3);
 
  width = ((1419-1175-circleMargin)/ 1920) * this.innerWidth;
  this.course2WidthStyleValues4=  width + 'px';  
  console.log("margin4:"+ this.course2WidthStyleValues4);
  sum+=width;
  this.course2WidthNameStyleValues4 = sum+'px';
  console.log("course2WidthNameStyleValues4:"+this.course2WidthNameStyleValues4);

  // 2번째 코스 값을 계산한다. end

  this.stationFontSize = {
        'position': 'absolute',
        //'left': left + 'px',
        //'top': 30 + 'px',  
        'font-size': fontsize + 'px',
        'object-fit': 'contain',
        'font-family': 'NotoSansCJKkr',
        'font-weight': '500',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#000000',
        'padding-right':'50px',
  };

  left = 0;
  paddingtop = 20;
  this.stationNameStyleValues = {
        'left': left + 'px',
        'padding-top': paddingtop + 'px',
        'margin-top':'0px',
        'font-size': fontsize + 'px',
        'object-fit': 'contain',
        'font-family': 'NotoSansCJKkr',
        'font-weight': '500',
        'font-style': 'normal',
        'font-stretch': 'normal',
        'line-height': 'normal',
        'letter-spacing': 'normal',
        'color': '#000000'
    }

/////////////////////////////////////////////////////////
    let marginright;

    left =  0;
    top =  ((1786 ) / 1920) * this.innerWidth;
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
    top =  ((1906 ) / 1920) * this.innerWidth;
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
  }

  getDirection() {
    this.origin = { lat: 37.546944, lng: 126.884399 };
    this.destination = { lat: 37.5584769, lng: 126.9255755 };
  }

// https://robby570.tw/Agm-Direction-Docs/source/properties/output.html
  public onResponse(event: any){
    console.log(event);
    // You can do anything.
  }

}

let user = [
  {
    path:"/user" , 
    component:()=>import("@/components/menu/user/User")
  } ,
  {
    path:"/adopt" , 
    component:()=>import("@/components/menu/user/Adopt")
  } ,
  {
    path:"/failed" , 
    component:()=>import("@/components/menu/user/Failed")
  } 
];

let offer = [
  {
    path:"/offer_insert" , 
    component:()=>import("@/components/menu/offer/offer-insert")
  } , 
  {
    path:"/offer-update" , 
    component:()=>import("@/components/menu/offer/offer-update")
  } 
];

let report = [
  {
    path:"/report_delete" , 
    component:()=>import("@/components/menu/report/report-delete")
  }
];

export {user , offer , report}
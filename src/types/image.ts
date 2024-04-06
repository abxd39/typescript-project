export interface Root {
    data: Data;
    message: string;
    retCode: string; 
  }
  
  export interface Data {
    style_image_map: Style_image_map; 
  }
  
  export interface Style_image_map {
    pubgm: Pubgm;
    sop: Sop; 
  }
  
  export interface Sop {
    banner_image_list: []; 
  }
  
  export interface Pubgm {
    banner_image_list: string[]; 
  }
  
  
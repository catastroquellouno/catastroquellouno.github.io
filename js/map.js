
var map = L.map('map', { attributionControl: false,zoomControl: true }).setView([-12.62211, -72.41782], 14);




var imageUrl = 'images/geook.jpg'; // Asegúrate de poner aquí la ruta correcta a tu imagen
var imageBounds = [
    [-12.6243628, -72.3858880], // Esquina superior izquierda
    [-12.6294265, -72.3741293]  // Esquina inferior derecha
];

var ortofoto = L.imageOverlay(imageUrl, imageBounds);





var cartodb = {
  'OSM:':L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{

    maxZoom: 28,
  }),
  'GOOGLE SATELITE':L.tileLayer('http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}',{

    maxZoom: 28,
  }),
  'Carto':L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
    maxZoom: 28,
}).addTo(map),
'Carto Dark':L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
  maxZoom: 28,
}),


};




// vias
var tg_vias = L.geoJson(tg_vias, {
  onEachFeature: function (feature, layer) {
      layer.setText(feature.properties.nomb_via,
      {offset: 0,
      //orientation: 'flip', 
      repeat: false,
      center: true,
      attributes: {'font-weight': '700','align': 'center', 'font-size': '10','font-family': 'Open Sans'}});
  },
  style: {
      weight: 0,
      color: 'blue',
      dashArray: '4, 4'
  }

});






// sector

var tg_sectores = L.geoJson(tg_sectores, {
  className: 'sector',
  /*
  onEachFeature: function (feature,layer) {
      layer.bindTooltip('Sector: ' + feature.properties.cod_sector ,{
       permanent: true,
       direction: 'bottom',
       className: 'sectorTooltip',
      })
}*/
}).addTo(map);

// manznas

var tg_manzana = L.geoJson(tg_manzana, {
  className: 'manzana',
  onEachFeature: function(feature, layer) {
      var cod_mzna = feature.properties.cod_mzna;
      layer.bindTooltip("Manzana: " + cod_mzna, {
          direction: 'center',
          permanent: false,
          opacity: 1,
      });
  }
}).addTo(map);



// edificas
var estilocanchis = {
  'color': '#808080',
  'weight': 0.5
}
var edifica = L.geoJson(edifica, {
  style: estilocanchis,
});
// uucc
var uucc = {
  color: "rgba(238, 154, 18, 0.74)",
  fillColor: "rgba(238, 154, 18, 0.1)",
  dashArray: [5, 5],
  weight: 2
}

var uucc_piso_01 = L.geoJson(uucc_piso_01, {
  style: uucc,
}).addTo(map);

// tg_comercio

var comercio = {
  color: 'rgba(254, 0, 212)', // Color del borde
  weight: 2,        // Grosor del borde
  fillColor: 'rgba(254, 0, 212)', // Color de relleno
  fillOpacity: 0.5,  // Opacidad del relleno
}

var tg_comercio1 = {
  "type": "FeatureCollection",
  "name": "tg_comercio1",
  "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  "features": [
  { "type": "Feature", "properties": { "gid": 1, "codi_piso": "01", "area_grafica": 28.76, "codi_lote": "004", "id_uni_cat": "08090609001004010101001", "fech_actua": "2024-02-15", "nume_ficha": "0000003" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -72.384185930193127, -12.626618590522357 ], [ -72.384180604848154, -12.626660721806386 ], [ -72.384236844241315, -12.626667867612658 ], [ -72.384241356124321, -12.626625629376537 ], [ -72.384185930193127, -12.626618590522357 ] ] ] ] } },
  { "type": "Feature", "properties": { "gid": 2, "codi_piso": "01", "area_grafica": 47.7, "codi_lote": "005", "id_uni_cat": "08090609001005010101001", "fech_actua": "2024-02-15", "nume_ficha": "0000004" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -72.384094694137076, -12.626605686324016 ], [ -72.384088924187324, -12.626648222420625 ], [ -72.384180604848154, -12.626660721806386 ], [ -72.384185988874478, -12.6266181262666 ], [ -72.384094694137076, -12.626605686324016 ] ] ] ] } },
  { "type": "Feature", "properties": { "gid": 3, "codi_piso": "01", "area_grafica": 35.0, "codi_lote": "006", "id_uni_cat": "08090609001006010201001", "fech_actua": "2024-02-15", "nume_ficha": "0000013" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -72.384026403086409, -12.62659776817897 ], [ -72.38402081452233, -12.62663903906226 ], [ -72.384088924187324, -12.626648222420625 ], [ -72.384094703609662, -12.626605616491968 ], [ -72.384026403086409, -12.62659776817897 ] ] ] ] } },
  { "type": "Feature", "properties": { "gid": 4, "codi_piso": "01", "area_grafica": 81.42, "codi_lote": "007", "id_uni_cat": "08090609001007010201001", "fech_actua": "2024-02-15", "nume_ficha": "0000005" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -72.383888378641757, -12.626558458070724 ], [ -72.383879104949131, -12.626619033621854 ], [ -72.383989058656269, -12.626634757351169 ], [ -72.383998231346951, -12.626574903938041 ], [ -72.383888378641757, -12.626558458070724 ] ] ] ] } },
  { "type": "Feature", "properties": { "gid": 5, "codi_piso": "01", "area_grafica": 60.53, "codi_lote": "015", "id_uni_cat": "08090609006015010201001", "fech_actua": "2024-02-15", "nume_ficha": "0000002" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -72.383707846138492, -12.627253040912722 ], [ -72.383694923036558, -12.627305737792282 ], [ -72.383786343674572, -12.627325035000037 ], [ -72.383797908682055, -12.627272034649893 ], [ -72.383707846138492, -12.627253040912722 ] ] ] ] } },
  { "type": "Feature", "properties": { "gid": 6, "codi_piso": "01", "area_grafica": 47.7, "codi_lote": "011", "id_uni_cat": "08090609019011010201001", "fech_actua": "2024-02-15", "nume_ficha": "0000009" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -72.378048351597201, -12.6264338915751 ], [ -72.377955795760073, -12.626421592041327 ], [ -72.377950331651689, -12.626463875485697 ], [ -72.378042945592213, -12.626475813795336 ], [ -72.378048351597201, -12.6264338915751 ] ] ] ] } },
  { "type": "Feature", "properties": { "gid": 7, "codi_piso": "01", "area_grafica": 25.02, "codi_lote": "002", "id_uni_cat": "08090609005002010101001", "fech_actua": "2024-02-15", "nume_ficha": "0000001" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -72.383648913887015, -12.626982378833526 ], [ -72.383603565998243, -12.62697483377233 ], [ -72.383597110834017, -12.627019556389328 ], [ -72.383642552072828, -12.627027114351543 ], [ -72.383648913887015, -12.626982378833526 ] ] ] ] } },
  { "type": "Feature", "properties": { "gid": 8, "codi_piso": "01", "area_grafica": 50.57, "codi_lote": "014", "id_uni_cat": "08090609017014010201001", "fech_actua": "2024-02-15", "nume_ficha": "0000007" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -72.37855696027448, -12.62605275664572 ], [ -72.378464840588492, -12.626040989835358 ], [ -72.378459990899159, -12.626086060164543 ], [ -72.378552135576115, -12.626097676962438 ], [ -72.37855696027448, -12.62605275664572 ] ] ] ] } },
  { "type": "Feature", "properties": { "gid": 9, "codi_piso": "01", "area_grafica": 43.56, "codi_lote": "007", "id_uni_cat": "08090609018007010201001", "fech_actua": "2024-02-15", "nume_ficha": "0000008" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -72.378546490345656, -12.626495711502278 ], [ -72.378506331120533, -12.626490759382545 ], [ -72.378495805918462, -12.626579595695471 ], [ -72.37853596612662, -12.626584547930257 ], [ -72.378546490345656, -12.626495711502278 ] ] ] ] } },
  { "type": "Feature", "properties": { "gid": 10, "codi_piso": "01", "area_grafica": 56.03, "codi_lote": "006", "id_uni_cat": "08090609009006010101001", "fech_actua": "2024-02-15", "nume_ficha": "0000011" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -72.38282500750995, -12.626958859732632 ], [ -72.38273888556634, -12.626951293175308 ], [ -72.382734609301366, -12.627007145894893 ], [ -72.382805203143874, -12.627012831706667 ], [ -72.382819376710174, -12.627001867539867 ], [ -72.38282500750995, -12.626958859732632 ] ] ] ] } },
  { "type": "Feature", "properties": { "gid": 11, "codi_piso": "01", "area_grafica": 105.38, "codi_lote": "010", "id_uni_cat": "08090609009010010201001", "fech_actua": "2024-02-15", "nume_ficha": "0000012" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -72.382553007481491, -12.626606034749225 ], [ -72.382442983953339, -12.626592990573767 ], [ -72.382442487110993, -12.626675649602459 ], [ -72.382544326189716, -12.626687625719253 ], [ -72.382553007481491, -12.626606034749225 ] ] ] ] } },
  { "type": "Feature", "properties": { "gid": 12, "codi_piso": "01", "area_grafica": 47.65, "codi_lote": "005", "id_uni_cat": "08090609011005010201001", "fech_actua": "2024-02-15", "nume_ficha": "0000010" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -72.38280526571701, -12.627120858578191 ], [ -72.382730690137294, -12.627115550145726 ], [ -72.382727325175026, -12.627143682721439 ], [ -72.382737192853426, -12.627144385126076 ], [ -72.382734275239329, -12.627171411869812 ], [ -72.382799222270464, -12.627178032964279 ], [ -72.38280526571701, -12.627120858578191 ] ] ] ] } },
  { "type": "Feature", "properties": { "gid": 13, "codi_piso": "01", "area_grafica": 19.9, "codi_lote": "007", "id_uni_cat": "08090609002007010201001", "fech_actua": "2024-02-15", "nume_ficha": "0000006" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -72.382025402328381, -12.6263516926635 ], [ -72.382032955475751, -12.626297274375348 ], [ -72.382003106149767, -12.626293278514895 ], [ -72.381995559105491, -12.626347652787882 ], [ -72.382025402328381, -12.6263516926635 ] ] ] ] } },
  { "type": "Feature", "properties": { "gid": 14, "codi_piso": "01", "area_grafica": 47.74, "codi_lote": "002", "id_uni_cat": "08090607006002010101001", "fech_actua": "2024-02-27", "nume_ficha": "0000052" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -72.441026718841798, -12.61757412844562 ], [ -72.441027437007662, -12.617617931365423 ], [ -72.441099737438861, -12.617622721853996 ], [ -72.441119444389756, -12.617605121344523 ], [ -72.441118824789044, -12.61757764138793 ], [ -72.441026718841798, -12.61757412844562 ] ] ] ] } },
  { "type": "Feature", "properties": { "gid": 15, "codi_piso": "01", "area_grafica": 26.78, "codi_lote": "005", "id_uni_cat": "08090607006005010101001", "fech_actua": "2024-02-27", "nume_ficha": "0000051" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -72.441312598810057, -12.617509389262713 ], [ -72.441265831361164, -12.617511944987724 ], [ -72.441269334107446, -12.617560157430633 ], [ -72.441315311043383, -12.617556783966336 ], [ -72.441312598810057, -12.617509389262713 ] ] ] ] } },
  { "type": "Feature", "properties": { "gid": 16, "codi_piso": "01", "area_grafica": 40.43, "codi_lote": "003", "id_uni_cat": "08090607012003010101001", "fech_actua": "2024-02-27", "nume_ficha": "0000018" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -72.441902563784907, -12.617730156953584 ], [ -72.441896394332645, -12.617797034198437 ], [ -72.441946247171046, -12.617801716269057 ], [ -72.441951956987694, -12.617734204150196 ], [ -72.441902563784907, -12.617730156953584 ] ] ] ] } },
  { "type": "Feature", "properties": { "gid": 17, "codi_piso": "01", "area_grafica": 39.53, "codi_lote": "001", "id_uni_cat": "08090607012001010101001", "fech_actua": "2024-02-27", "nume_ficha": "0000016" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -72.441634458891428, -12.617711355751016 ], [ -72.441631976488495, -12.61775376007037 ], [ -72.441690502381618, -12.617754970677234 ], [ -72.441700185821475, -12.617701461123168 ], [ -72.441648496707842, -12.617699140616072 ], [ -72.441634458891428, -12.617711355751016 ] ] ] ] } },
  { "type": "Feature", "properties": { "gid": 18, "codi_piso": "01", "area_grafica": 13.86, "codi_lote": "002", "id_uni_cat": "08090607013002010101001", "fech_actua": "2024-02-27", "nume_ficha": "0000014" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -72.441462259636026, -12.617686482892708 ], [ -72.441460798342376, -12.617714482276384 ], [ -72.441502270121333, -12.617716372447649 ], [ -72.441503418807315, -12.617688736390539 ], [ -72.441462259636026, -12.617686482892708 ] ] ] ] } }
  ]
  };
// Crear un grupo que contendrá tanto los polígonos como los marcadores
var grupoComercio = L.featureGroup().addTo(map);

// Añadir los polígonos al grupo
var poligonosComercio = L.geoJSON(tg_comercio1, {
  style: comercio,
  onEachFeature: function (feature, layer) {
    layer.bindTooltip(feature.properties.nume_ficha,{
      permanent: true,
      direction: 'center',
      className: 'sectorTooltip',
     })
    grupoComercio.addLayer(layer); // Añade el polígono al grupo
  }
});

// Ahora, iteramos sobre cada polígono para añadir un marcador en su centro
poligonosComercio.eachLayer(function (layer) {
  var centroide = layer.getBounds().getCenter();
  var iconoActividad = L.icon({
    iconUrl: 'images/mercado.svg',
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });

  // Crea un marcador y lo añade al mismo grupo
  L.marker(centroide, {icon: iconoActividad}).addTo(grupoComercio);
});



//piso_01

var piso1 = {
  color: '#ff0000', // Color del borde
  weight: 2,        // Grosor del borde
  fillColor: '#ff0000', // Color de relleno
  fillOpacity: 0.5  // Opacidad del relleno
}

var piso_01 = L.geoJson(piso_01, {
  style: piso1,
});

//piso_01

var piso2 = {
  color: '#fbff00',
  weight: 2,        // Grosor del borde
  fillColor: '#fbff00', // Color de relleno
  fillOpacity: 0.5  // Opacidad del relleno

}
var piso_02 = L.geoJson(piso_02, {
  style: piso2,
});






var piso3 = {
  color: '#00ff00', // Color del borde
  weight: 2,        // Grosor del borde
  fillColor: '#00ff00', // Color de relleno
  fillOpacity: 0.5  // Opacidad del relleno
}

var piso_03 = L.geoJson(piso_03, {
  style: piso3,
});

//piso_01

var piso01sintecho = {
  color: '#ff0000', // Color del borde
  weight: 2,        // Grosor del borde
  fillColor: '#ff0000', // Color de relleno
  fillOpacity: 0.5  // Opacidad del relleno

}
var piso_01_sintecho = L.geoJson(piso_01_sintecho, {
  style: piso01sintecho,
});
// color
function getColor(tg_puerta) {

  switch (tg_puerta) {
    case 1:
      return  "#de0607";
    case 2:
      return "#ffff00";
    case 3:
      return "#00ff00";
    case 4:
      return "#00ffff";
    case 5:
      return "#0000ff";
    case 6:
      return  "#ff00ff";
    case 7:
      return "#ffffff";
    case 8:
      return "#808080";
    case 9:
      return "#c0c0c0";
    case 10:
      return "#ff0000";
    case 11:
      return  "#ff7f7f";
    case 12:
      return "#a50000";
    case 13:
      return "#33a02c";
    case 14:
      return "#2a82ba";
    case 15:
      return "#2a82ba";
    default:
      return "white";
}
}


// Añadir estilos CSS para los tooltips
// Debes incluir este CSS en tu archivo de estilos o dentro de una etiqueta <style> en tu HTML
// Nota: es posible que necesites ajustar el color de texto para que sea visible contra el color del marcador


var uno = L.geoJson(tg_puerta, {
  filter: function(feature, layer) {
    if (feature.properties.color === 1)
      return true;
  },


    pointToLayer: function (feature, latlng) {
      return new L.CircleMarker(latlng, {
          radius: 1.5,
          fillOpacity: 1,
          color: getColor(feature.properties.color), 
          fillColor: getColor(feature.properties.color), 
          weight: 1
        });
  }
});

var dos = L.geoJson(tg_puerta, {
  filter: function(feature, layer) {
    if (feature.properties.color === 2)
      return true;
  },


    pointToLayer: function (feature, latlng) {
      return new L.CircleMarker(latlng, {
          radius: 1.5,
          fillOpacity: 1,
          color: getColor(feature.properties.color), 
          fillColor: getColor(feature.properties.color), 
          weight: 1
        });
  }
});

var tres = L.geoJson(tg_puerta, {
  filter: function(feature, layer) {
    if (feature.properties.color === 3)
      return true;
  },


    pointToLayer: function (feature, latlng) {
      return new L.CircleMarker(latlng, {
          radius: 1.5,
          fillOpacity: 1,
          color: getColor(feature.properties.color), 
          fillColor: getColor(feature.properties.color), 
          weight: 1
        });
  }
});


var cuatro = L.geoJson(tg_puerta, {
  filter: function(feature, layer) {
    if (feature.properties.color === 4)
      return true;
  },


    pointToLayer: function (feature, latlng) {
      return new L.CircleMarker(latlng, {
          radius: 1.5,
          fillOpacity: 1,
          color: getColor(feature.properties.color), 
          fillColor: getColor(feature.properties.color), 
          weight: 1
        });
  }
});

var cinco = L.geoJson(tg_puerta, {
  filter: function(feature, layer) {
    if (feature.properties.color === 5)
      return true;
  },


    pointToLayer: function (feature, latlng) {
      return new L.CircleMarker(latlng, {
          radius: 1.5,
          fillOpacity: 1,
          color: getColor(feature.properties.color), 
          fillColor: getColor(feature.properties.color), 
          weight: 1
        });
  }
});

var seis = L.geoJson(tg_puerta, {
  filter: function(feature, layer) {
    if (feature.properties.color === 6)
      return true;
  },


    pointToLayer: function (feature, latlng) {
      return new L.CircleMarker(latlng, {
          radius: 1.5,
          fillOpacity: 1,
          color: getColor(feature.properties.color), 
          fillColor: getColor(feature.properties.color), 
          weight: 1
        });
  }
});



// Layer Control
var baseMaps = {
    
    //"Google Satellite": satellite,
    //"OpenStreetMap": osmLayer,
    "Mapa base": cartodb,

};




// textos puertas
// Show
var uno_txt = L.geoJson(txt_puerta, {
  filter: function(feature, layer) {
    return feature.properties.color === 1;
  },
  pointToLayer: function (feature, latlng) {
    return new L.CircleMarker(latlng, {
        radius: 0,
        fillOpacity: 0,
        color: getColor(feature.properties.color),
        fillColor: getColor(feature.properties.color),
        weight: 0
      });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties && feature.properties.text) {
      // Define el color del texto usando getColor para cada feature
      var textColor = getColor(feature.properties.color);
      
      // Crea un tooltip personalizado con el color de texto adecuado
      var tooltip = L.tooltip({
        permanent: true,
        direction: 'center',
        className: 'custom-tooltip' // Usamos una clase para aplicar estilos comunes
      })
      .setContent('<span style="color: ' + textColor + '">' + feature.properties.text + '</span>');
      
      // Vincula el tooltip personalizado al layer
      layer.bindTooltip(tooltip);
    }
  }
});

var dos_txt = L.geoJson(txt_puerta, {
  filter: function(feature, layer) {
    return feature.properties.color === 2;
  },
  pointToLayer: function (feature, latlng) {
    return new L.CircleMarker(latlng, {
        radius: 0,
        fillOpacity: 0,
        color: getColor(feature.properties.color),
        fillColor: getColor(feature.properties.color),
        weight: 0
      });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties && feature.properties.text) {
      // Define el color del texto usando getColor para cada feature
      var textColor = getColor(feature.properties.color);
      
      // Crea un tooltip personalizado con el color de texto adecuado
      var tooltip = L.tooltip({
        permanent: true,
        direction: 'center',
        className: 'custom-tooltip' // Usamos una clase para aplicar estilos comunes
      })
      .setContent('<span style="color: ' + textColor + '">' + feature.properties.text + '</span>');
      
      // Vincula el tooltip personalizado al layer
      layer.bindTooltip(tooltip);
    }
  }
});
var tres_txt = L.geoJson(txt_puerta, {
  filter: function(feature, layer) {
    return feature.properties.color === 3;
  },
  pointToLayer: function (feature, latlng) {
    return new L.CircleMarker(latlng, {
        radius: 0,
        fillOpacity: 0,
        color: getColor(feature.properties.color),
        fillColor: getColor(feature.properties.color),
        weight: 0
      });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties && feature.properties.text) {
      // Define el color del texto usando getColor para cada feature
      var textColor = getColor(feature.properties.color);
      
      // Crea un tooltip personalizado con el color de texto adecuado
      var tooltip = L.tooltip({
        permanent: true,
        direction: 'center',
        className: 'custom-tooltip' // Usamos una clase para aplicar estilos comunes
      })
      .setContent('<span style="color: ' + textColor + '">' + feature.properties.text + '</span>');
      
      // Vincula el tooltip personalizado al layer
      layer.bindTooltip(tooltip);
    }
  }
});
var cuatro_txt = L.geoJson(txt_puerta, {
  filter: function(feature, layer) {
    return feature.properties.color === 4;
  },
  pointToLayer: function (feature, latlng) {
    return new L.CircleMarker(latlng, {
        radius: 0,
        fillOpacity: 0,
        color: getColor(feature.properties.color),
        fillColor: getColor(feature.properties.color),
        weight: 0
      });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties && feature.properties.text) {
      // Define el color del texto usando getColor para cada feature
      var textColor = getColor(feature.properties.color);
      
      // Crea un tooltip personalizado con el color de texto adecuado
      var tooltip = L.tooltip({
        permanent: true,
        direction: 'center',
        className: 'custom-tooltip' // Usamos una clase para aplicar estilos comunes
      })
      .setContent('<span style="color: ' + textColor + '">' + feature.properties.text + '</span>');
      
      // Vincula el tooltip personalizado al layer
      layer.bindTooltip(tooltip);
    }
  }
});

var cinco_txt = L.geoJson(txt_puerta, {
  filter: function(feature, layer) {
    return feature.properties.color === 5;
  },
  pointToLayer: function (feature, latlng) {
    return new L.CircleMarker(latlng, {
        radius: 0,
        fillOpacity: 0,
        color: getColor(feature.properties.color),
        fillColor: getColor(feature.properties.color),
        weight: 0
      });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties && feature.properties.text) {
      // Define el color del texto usando getColor para cada feature
      var textColor = getColor(feature.properties.color);
      
      // Crea un tooltip personalizado con el color de texto adecuado
      var tooltip = L.tooltip({
        permanent: true,
        direction: 'center',
        className: 'custom-tooltip' // Usamos una clase para aplicar estilos comunes
      })
      .setContent('<span style="color: ' + textColor + '">' + feature.properties.text + '</span>');
      
      // Vincula el tooltip personalizado al layer
      layer.bindTooltip(tooltip);
    }
  }
});

var seis_txt = L.geoJson(txt_puerta, {
  filter: function(feature, layer) {
    return feature.properties.color === 6;
  },
  pointToLayer: function (feature, latlng) {
    return new L.CircleMarker(latlng, {
        radius: 0,
        fillOpacity: 0,
        color: getColor(feature.properties.color),
        fillColor: getColor(feature.properties.color),
        weight: 0
      });
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties && feature.properties.text) {
      // Define el color del texto usando getColor para cada feature
      var textColor = getColor(feature.properties.color);
      
      // Crea un tooltip personalizado con el color de texto adecuado
      var tooltip = L.tooltip({
        permanent: true,
        direction: 'center',
        className: 'custom-tooltip' // Usamos una clase para aplicar estilos comunes
      })
      .setContent('<span style="color: ' + textColor + '">' + feature.properties.text + '</span>');
      
      // Vincula el tooltip personalizado al layer
      layer.bindTooltip(tooltip);
    }
  }
});

// tg_lote

// tg_lote

function Infoerp(feature, layer) {
  if (feature.properties && feature.properties.id_lote) {
      var popupContent = '<h1 style="color: #2A4D69; font-size: 20px; text-align: center;">Información del Lote</h1>'
      +"<b>ID_LOTE: </b>"+feature.properties.id_lote+"</b><br>"
      +"<b>Ubigeo: </b>"+"080906"+"</b><br>"
      +"<b>Sector: </b>"+feature.properties.cod_sector+"</b><br>"
      +"<b>Manzana: </b>"+feature.properties.cod_mzna+"</b><br>"
      +"<b>Lote: </b>"+feature.properties.cod_lote+"</b><br>"
      + "<b>Area_m2: </b>" + feature.properties.area_grafica + "<br>"
      + "<b>Perimetro_m: </b>" + feature.properties.peri_grafico + "<br>"
      + "<b>Foto: </b><br>" + '<center><img src="' + feature.properties.sinfoto + '" height="200px" width="200px"/></center>'
      + '<br><button id="verPlanoBtn" class="btn btn-ver-plano">Ver Coordenadas</button>'
      + '<button id="verFichaBtn" class="btn btn-ver-ficha">Ver Croquis</button>';
      

      layer.bindPopup(popupContent);

      layer.on('popupopen', function() {
          document.getElementById('verPlanoBtn').onclick = function() {
              // Acción al hacer clic en Ver Plano
              console.log('Ver Plano clic');
              // Aquí puedes añadir tu lógica, por ejemplo, abrir un enlace
              window.open(feature.properties.coordenadas);
          };
          document.getElementById('verFichaBtn').onclick = function() {
              // Acción al hacer clic en Ver Ficha
              console.log('Ver Ficha clic');
              // Aquí puedes añadir tu lógica, por ejemplo, abrir un enlace
              window.open(feature.properties.croquis);
          };
      });
  }

  // Llamar a la función para agregar etiquetas
  addLabelsToFeatures(feature, layer);
}

// Función para agregar etiquetas a cada polígono
function addLabelsToFeatures(feature, layer) {
  var cod_lote = feature.properties.cod_lote;
  layer.bindTooltip(cod_lote, { permanent: true, className: 'custom-tooltip', direction: 'center' }).openTooltip();
}

// Crear la capa geoJson con opciones de etiquetado y popups
var tg_lote = L.geoJson(tg_lote, {
  className: 'lote',
  onEachFeature: Infoerp, // Utilizando la función Infoerp que ahora incluye addLabelsToFeatures
});

// Definir una función para añadir o quitar la capa dependiendo del nivel de zoom
function manageTgLoteLayer() {
  var currentZoom = map.getZoom();
  if (currentZoom > 19) {
    if (!map.hasLayer(tg_lote)) {
      tg_lote.addTo(map);
      tg_lote.bringToFront();
    }
  } else {
    if (map.hasLayer(tg_lote)) {
      map.removeLayer(tg_lote);
    }
  }
}

// Agregar un evento de zoom al mapa
map.on('zoomend', function () {
  manageTgLoteLayer();
});

// Llamar a la función al principio para establecer el estado inicial
manageTgLoteLayer();





 
// group puertas
var txtp = [uno, dos, tres, cuatro,cinco, seis,uno_txt, dos_txt, tres_txt, cuatro_txt, cinco_txt, seis_txt];

var txtgroup = L.layerGroup(txtp);


// layers

var overlayMaps = {
    "LOTE": tg_lote,
    "SECTORES": tg_sectores,
    "MANZANA": tg_manzana,
    "EDIFICA": edifica,
    "COMERCIO": grupoComercio,
    "PISO_01": piso_01,
    "PISO_01_SINTECHO": piso_01_sintecho,
    "PISO_02": piso_02,
    "PISO_03": piso_03,
    "UUCC-PISO_01": uucc_piso_01,
    "VIAS":tg_vias,
    "PUERTAS": txtgroup,
    "Ortofoto Chancamayo": ortofoto,
};

var control = L.control.layers(cartodb, overlayMaps, {
  collapsed: false,
  autoZIndex: true,
}).addTo(map);


// Medicion
L.control.polylineMeasure({
  unit: 'Meters',
  measureControlTitleOn: 'Medir en metros',
  measureControlTitleOff: 'Apagar',

}).addTo(map);
// Coordenadas
L.control.mousePosition().addTo(map);

// user
map.pm.addControls({
  position: 'topleft',
  drawCircle: false,
  drawPolyline: false,
  drawRectangle: false,
  cutPolygon: false,
  editPolygon: false,
  dragLayer: false,
  rotateMode: false,
  dragMode: false,
  drawCircleMarker: false,
  oneBlock: true,
});







var customActionToPrint = function(context, mode) {
	return function() {
		window.alert("We are printing the MAP. Let's do Custom print here!");
		context._printMode(mode);
	}
};


// print

var browserPrint = L.browserPrint(map,{debug:false, cancelWithEsc: true});

var c = L.control.browserPrint({
  title: 'Imprimir!!!',
  position: 'topright',

    printModes: [
    L.BrowserPrint.Mode.Landscape('A3',{margin: 1, title: 'Plano A3', header: {
            enabled: true,
            text: "<h2>Mejoramiento de los Servicios de Gestión Territorial para el Desarrollo Urbano Rural del Distrito de Quellouno</h2>",
            size: "30mm",
            color: "blue",
            font: "open sans",
            overTheMap: true,
        }}),
    L.BrowserPrint.Mode.Landscape('A4',{margin: 1, title: 'Plano A4', header: {
          enabled: true,
          text: "<h2>Mejoramiento de los Servicios de Gestión Territorial para el Desarrollo Urbano Rural del Distrito de Quellouno</h2>",
          size: "30mm",
          color: "blue",
          font: "open sans",
          overTheMap: true,
      }}),

    L.BrowserPrint.Mode.Custom("B4", {title: "Seleccionar area a imprimir!!!", margin: 1, header: {
          enabled: true,
          text: "<h2>Mejoramiento de los Servicios de Gestión Territorial para el Desarrollo Urbano Rural del Distrito de Quellouno</h2>",
          size: "30mm",
          color: "blue",
          font: "open sans",
          overTheMap: true,
      }})]
}, browserPrint).addTo(map);
// search
var searchControl = new L.Control.Search({
  layer: tg_lote,
  propertyName: 'id_lote',
  circleLocation: true,
});

searchControl.on('search_locationfound', function(e) {
  e.layer.setStyle({fillColor: '#3f0', color: '#0f0'});
})

map.addControl(searchControl);




// leyenda
const legend = L.control.Legend({
  position: "bottomleft",
  title: "Leyenda",
  collapsed: false,
  symbolWidth: 24,
  opacity: 1,
  column: 2,
  legends: [{
    label: "Manzana",
    type: "rectangle",
    color: "cyan",
    fillColor: "rgba(0, 255, 255, 0.51)",
    weight: 2
}, {
    label: "Lote",
    type: "polygon",
    sides: 4,
    color: "rgb(0, 0, 0)",
    fillColor: "rgba(0, 0, 0, 0)",
    weight: 2
},{
    label: "Sector",
    type: "polygon",
    sides: 7,
    color: "#7c00a5",
    fillColor: "rgba(0, 0, 0, 0.20)",
    weight: 2
},{
  label: "UUCC_PISO_01",
  type: "polygon",
  sides: 5,
  color: "rgba(238, 154, 18, 0.74)",
  fillColor: "rgba(238, 154, 18, 0.1)",
  dashArray: [5, 5],
  weight: 2
},{
  label: "Actividades Economicas",
  type: "image",
  url: "images/mercado.svg"
},{
  label: "Edifica",
  type: "rectangle",
  color: "#808080",
  fillColor: "rgba(0, 0, 0, 0.20)",
  weight: 2
},


{
  label: "PISO_01",
  type: "polygon",
  sides: 5,
  color: "#ff0000",
  fillColor: "rgba(255, 0, 0, 0.50)",
  weight: 2
},
{
  label: "PISO_02",
  type: "polygon",
  sides: 5,
  color: "#fbff00",
  fillColor: "rgba(255, 255, 2, 0.50)",
  weight: 2
},
{
  label: "Puerta",
  type: "circle",
  radius: 2,
  color: "blue",
  fillColor: "blue",
  fillOpacity: 0.9,
  weight: 2,


},{
  label: "",
  type: "polygon",
  sides: 4,
  color: "rgba(254, 0, 212)",
  fillColor: "rgba(254, 0, 212, 0.50)",
  weight: 2,
  url: "images/mercado.svg"
}]
})
.addTo(map);



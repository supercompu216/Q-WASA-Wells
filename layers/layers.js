var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Wasa_Tube_Wells_All_1 = new ol.format.GeoJSON();
var features_Wasa_Tube_Wells_All_1 = format_Wasa_Tube_Wells_All_1.readFeatures(json_Wasa_Tube_Wells_All_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wasa_Tube_Wells_All_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wasa_Tube_Wells_All_1.addFeatures(features_Wasa_Tube_Wells_All_1);
var lyr_Wasa_Tube_Wells_All_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wasa_Tube_Wells_All_1, 
                style: style_Wasa_Tube_Wells_All_1,
                popuplayertitle: 'Wasa_Tube_Wells_All',
                interactive: true,
                title: '<img src="styles/legend/Wasa_Tube_Wells_All_1.png" /> Wasa_Tube_Wells_All'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_Wasa_Tube_Wells_All_1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_Wasa_Tube_Wells_All_1];
lyr_Wasa_Tube_Wells_All_1.set('fieldAliases', {'SNo': 'SNo', 'Town': 'Town', 'Sub_Divisi': 'Sub_Divisi', 'Name_of_Tu': 'Name_of_Tu', 'Dia': 'Dia', 'Date_Compl': 'Date_Compl', 'Discharge': 'Discharge', 'SWL_Feet': 'SWL_Feet', 'Depth': 'Depth', 'Setting': 'Setting', 'Dia1': 'Dia1', 'Type': 'Type', 'Y': 'Y', 'X': 'X', 'Elevation': 'Elevation', 'Status': 'Status', });
lyr_Wasa_Tube_Wells_All_1.set('fieldImages', {'SNo': 'TextEdit', 'Town': 'TextEdit', 'Sub_Divisi': 'TextEdit', 'Name_of_Tu': 'TextEdit', 'Dia': 'TextEdit', 'Date_Compl': 'TextEdit', 'Discharge': 'TextEdit', 'SWL_Feet': 'TextEdit', 'Depth': 'TextEdit', 'Setting': 'TextEdit', 'Dia1': 'TextEdit', 'Type': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Elevation': 'TextEdit', 'Status': 'TextEdit', });
lyr_Wasa_Tube_Wells_All_1.set('fieldLabels', {'SNo': 'no label', 'Town': 'no label', 'Sub_Divisi': 'no label', 'Name_of_Tu': 'no label', 'Dia': 'no label', 'Date_Compl': 'no label', 'Discharge': 'no label', 'SWL_Feet': 'no label', 'Depth': 'no label', 'Setting': 'no label', 'Dia1': 'no label', 'Type': 'no label', 'Y': 'no label', 'X': 'no label', 'Elevation': 'no label', 'Status': 'no label', });
lyr_Wasa_Tube_Wells_All_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
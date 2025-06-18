var wms_layers = [];


        var lyr_GoogleSatelit_0 = new ol.layer.Tile({
            'title': 'Google Satelit',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Kelurahan_1 = new ol.format.GeoJSON();
var features_Kelurahan_1 = format_Kelurahan_1.readFeatures(json_Kelurahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kelurahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelurahan_1.addFeatures(features_Kelurahan_1);
var lyr_Kelurahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kelurahan_1, 
                style: style_Kelurahan_1,
                popuplayertitle: 'Kelurahan',
                interactive: true,
    title: 'Kelurahan<br />\
    <img src="styles/legend/Kelurahan_1_0.png" /> <br />\
    <img src="styles/legend/Kelurahan_1_1.png" /> Balandete<br />\
    <img src="styles/legend/Kelurahan_1_2.png" /> Laloeha<br />\
    <img src="styles/legend/Kelurahan_1_3.png" /> Lalombaa<br />\
    <img src="styles/legend/Kelurahan_1_4.png" /> Lamokato<br />\
    <img src="styles/legend/Kelurahan_1_5.png" /> Sabilambo<br />\
    <img src="styles/legend/Kelurahan_1_6.png" /> Tahoa<br />\
    <img src="styles/legend/Kelurahan_1_7.png" /> Watuliandu<br />'
        });
var format_KeteranganJalan_2 = new ol.format.GeoJSON();
var features_KeteranganJalan_2 = format_KeteranganJalan_2.readFeatures(json_KeteranganJalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KeteranganJalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KeteranganJalan_2.addFeatures(features_KeteranganJalan_2);
var lyr_KeteranganJalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KeteranganJalan_2, 
                style: style_KeteranganJalan_2,
                popuplayertitle: 'Keterangan Jalan',
                interactive: true,
    title: 'Keterangan Jalan<br />\
    <img src="styles/legend/KeteranganJalan_2_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/KeteranganJalan_2_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/KeteranganJalan_2_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/KeteranganJalan_2_3.png" /> <br />'
        });

lyr_GoogleSatelit_0.setVisible(true);lyr_Kelurahan_1.setVisible(true);lyr_KeteranganJalan_2.setVisible(true);
var layersList = [lyr_GoogleSatelit_0,lyr_Kelurahan_1,lyr_KeteranganJalan_2];
lyr_Kelurahan_1.set('fieldAliases', {'NAMOBJ': 'Kelurahan', 'LUASWH': 'Luas', 'WADMKC': 'Kecamatan', 'WADMKK': 'Kabupaten', });
lyr_KeteranganJalan_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jenis': 'Fungsi', 'Material': 'Material', 'Foto': 'Foto', });
lyr_Kelurahan_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUASWH': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', });
lyr_KeteranganJalan_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jenis': 'TextEdit', 'Material': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_Kelurahan_1.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'LUASWH': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', });
lyr_KeteranganJalan_2.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'Jenis': 'inline label - always visible', 'Material': 'inline label - always visible', 'Foto': 'inline label - always visible', });
lyr_KeteranganJalan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
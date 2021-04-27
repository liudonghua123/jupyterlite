var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="python-sat.data";var REMOTE_PACKAGE_BASE="python-sat.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","pysat",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/pysat","examples",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","python_sat-0.1.6.dev6-py3.8.egg-info",true,true);Module["FS_createPath"]("/","bin",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:992890,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1294,2236,2982,3788,4570,5932,7592,9100,10559,12121,13165,14603,15797,16939,17888,18750,19796,20801,21797,22916,24431,25829,27037,28262,29582,30882,31969,32983,34438,36108,37349,38580,39909,40491,41707,42798,43775,44692,45782,46708,47637,48451,49211,50232,51347,52253,53394,54452,55567,56514,57575,58531,59632,60353,61413,62474,63475,64600,65585,66631,67646,68676,69766,70781,71880,72907,73985,74977,76058,77067,78150,79210,79915,80553,81176,82051,82927,83844,84716,85693,86664,87585,88439,89389,90303,91179,92148,93116,94189,95332,96448,97584,98687,99812,100963,102112,103241,104483,105593,106743,107996,109172,110337,111582,112778,113950,115140,116259,117319,118494,119524,120524,121694,122903,124021,125169,126298,127371,128375,129907,130976,132040,133098,134157,135210,136329,137447,138558,139672,141046,142486,144065,145513,147196,148845,150306,151600,152911,154267,155381,156953,158609,160173,161688,163280,164778,166111,167724,169216,170658,172245,173770,175065,176433,177967,179476,181095,182194,183868,185331,186892,188081,189347,190687,192092,193540,194859,196308,197680,199239,200774,202330,203931,205586,206893,208492,209891,211496,213114,214564,215835,217252,218718,22e4,221287,222528,223604,224630,226012,227545,228891,230562,232202,233750,234816,236104,237149,238556,239908,240849,241992,243396,244877,246262,247915,249428,250744,252134,253455,254285,254932,255624,256368,257093,257797,258544,259242,259994,260612,261369,262007,262553,263159,263747,264787,265727,266676,267602,268884,270197,271605,272763,273793,274973,275832,276764,277973,279125,280716,282336,284001,285500,286256,287219,288611,290114,291613,293185,294633,295207,295898,297494,299075,300309,301442,302351,303195,304133,304885,305392,306085,306957,307921,308847,309695,310784,312098,313722,315354,316754,318172,319477,320932,322520,323797,325305,326927,328531,329993,331561,333054,334610,336080,337477,338672,339956,341341,342957,344604,346234,347841,349362,350546,351699,353275,354722,355985,357478,358999,360446,361961,363453,365081,366629,368123,369715,371149,372705,373926,375111,376535,378039,379369,380412,381324,382793,384383,385855,387045,388535,389991,391401,392916,394307,395850,397161,398490,399962,401606,402880,404362,405600,406730,408335,409349,410941,412548,414067,415637,416962,418035,419505,421079,422661,424214,425697,427214,428679,430227,431596,433145,434786,436285,437742,439007,440121,441616,442859,444470,445930,447575,449190,450514,451736,453204,454768,456340,457873,459319,460786,462318,463849,465395,466957,468212,469568,470669,472210,473289,474405,475563,477064,478529,480172,481713,483193,484651,486152,487607,489129,490727,492219,493777,495219,496704,497912,499311,500562,501907,503385,504885,506247,507533,508781,510204,511774,513282,514830,516328,517717,518810,520264,521413,522993,524475,525908,527383,528876,530382,531872,533437,535012,536302,537624,538958,539968,541578,543027,544539,546087,547511,549006,550447,551959,553572,555043,556452,557556,559035,560083,561542,562647,563773,564935,566094,567360,568508,569674,570805,572011,573117,574236,575387,576525,577723,578836,579948,581227,582346,583477,584668,585995,587179,588316,589467,590686,591792,592910,594114,595428,596551,597699,598866,599995,600926,601802,602681,603568,604464,605366,606239,607150,607844,608688,609952,611245,612424,613488,614549,615636,616679,617723,618799,619763,620846,622174,623252,624613,625796,626944,628293,629514,630861,632113,633504,634567,635583,636719,637873,639288,640731,641348,641373,641398,642286,643496,644589,645790,647312,648736,649917,651128,652357,653622,654904,656190,657346,658534,659647,660791,662007,662990,664399,665760,667075,668518,669743,670886,672088,673233,674192,675279,676451,677667,678768,679843,681009,682125,683290,684383,685385,686621,687800,688766,689946,691240,692380,693468,694471,695726,696887,697953,699142,700157,701271,702785,704095,705373,706625,707827,709145,709970,711319,712729,714068,715182,716522,717682,718802,719825,721127,722384,723257,724298,725483,726685,727578,728417,729261,730458,731437,732415,733232,734144,735100,735924,736815,737713,738716,739474,740355,741229,742278,743072,743910,744914,745839,746615,747463,748433,749292,750145,751048,751992,752805,753676,754544,755524,756202,757154,757961,758881,759571,760463,761437,762294,763116,764045,765350,766691,767995,769247,770487,771696,772858,774144,775339,776868,777860,779187,780458,781644,783006,784089,785406,786474,787805,789282,790443,791738,792853,793994,795157,796352,797799,799041,800223,801485,802740,804009,805276,806534,807771,808918,810406,811733,812945,814102,815384,816551,817656,818958,820303,821606,822839,824081,825316,826550,827731,828945,830106,831425,832684,833964,835310,836632,837835,839115,840381,841688,843077,844406,845627,846924,848179,849204,850425,851595,852598,853855,855111,856369,857464,858789,860098,861342,862344,863535,864720,865924,867278,868553,869654,870824,872054,873134,874343,875420,876582,877712,878744,879862,880753,881796,882845,883858,884983,886201,887725,888585,889342,890779,892029,893204,894496,895747,896917,898117,899362,900783,901950,903182,904413,905821,907055,908294,909499,910683,911834,913229,914452,915711,916957,918207,919443,920739,922026,923088,924345,925786,927081,928256,929401,930658,931936,933010,934518,935784,937054,938278,939542,940799,942029,943292,944360,945614,946918,948050,949466,950804,951997,953305,954456,955882,957211,958429,959693,960870,962120,963285,964444,965606,966734,967891,969079,970318,971563,972779,974120,975406,976640,977845,979056,980244,981489,982815,984074,985205,986337,987632,988682,989836,990944,992193],sizes:[1294,942,746,806,782,1362,1660,1508,1459,1562,1044,1438,1194,1142,949,862,1046,1005,996,1119,1515,1398,1208,1225,1320,1300,1087,1014,1455,1670,1241,1231,1329,582,1216,1091,977,917,1090,926,929,814,760,1021,1115,906,1141,1058,1115,947,1061,956,1101,721,1060,1061,1001,1125,985,1046,1015,1030,1090,1015,1099,1027,1078,992,1081,1009,1083,1060,705,638,623,875,876,917,872,977,971,921,854,950,914,876,969,968,1073,1143,1116,1136,1103,1125,1151,1149,1129,1242,1110,1150,1253,1176,1165,1245,1196,1172,1190,1119,1060,1175,1030,1e3,1170,1209,1118,1148,1129,1073,1004,1532,1069,1064,1058,1059,1053,1119,1118,1111,1114,1374,1440,1579,1448,1683,1649,1461,1294,1311,1356,1114,1572,1656,1564,1515,1592,1498,1333,1613,1492,1442,1587,1525,1295,1368,1534,1509,1619,1099,1674,1463,1561,1189,1266,1340,1405,1448,1319,1449,1372,1559,1535,1556,1601,1655,1307,1599,1399,1605,1618,1450,1271,1417,1466,1282,1287,1241,1076,1026,1382,1533,1346,1671,1640,1548,1066,1288,1045,1407,1352,941,1143,1404,1481,1385,1653,1513,1316,1390,1321,830,647,692,744,725,704,747,698,752,618,757,638,546,606,588,1040,940,949,926,1282,1313,1408,1158,1030,1180,859,932,1209,1152,1591,1620,1665,1499,756,963,1392,1503,1499,1572,1448,574,691,1596,1581,1234,1133,909,844,938,752,507,693,872,964,926,848,1089,1314,1624,1632,1400,1418,1305,1455,1588,1277,1508,1622,1604,1462,1568,1493,1556,1470,1397,1195,1284,1385,1616,1647,1630,1607,1521,1184,1153,1576,1447,1263,1493,1521,1447,1515,1492,1628,1548,1494,1592,1434,1556,1221,1185,1424,1504,1330,1043,912,1469,1590,1472,1190,1490,1456,1410,1515,1391,1543,1311,1329,1472,1644,1274,1482,1238,1130,1605,1014,1592,1607,1519,1570,1325,1073,1470,1574,1582,1553,1483,1517,1465,1548,1369,1549,1641,1499,1457,1265,1114,1495,1243,1611,1460,1645,1615,1324,1222,1468,1564,1572,1533,1446,1467,1532,1531,1546,1562,1255,1356,1101,1541,1079,1116,1158,1501,1465,1643,1541,1480,1458,1501,1455,1522,1598,1492,1558,1442,1485,1208,1399,1251,1345,1478,1500,1362,1286,1248,1423,1570,1508,1548,1498,1389,1093,1454,1149,1580,1482,1433,1475,1493,1506,1490,1565,1575,1290,1322,1334,1010,1610,1449,1512,1548,1424,1495,1441,1512,1613,1471,1409,1104,1479,1048,1459,1105,1126,1162,1159,1266,1148,1166,1131,1206,1106,1119,1151,1138,1198,1113,1112,1279,1119,1131,1191,1327,1184,1137,1151,1219,1106,1118,1204,1314,1123,1148,1167,1129,931,876,879,887,896,902,873,911,694,844,1264,1293,1179,1064,1061,1087,1043,1044,1076,964,1083,1328,1078,1361,1183,1148,1349,1221,1347,1252,1391,1063,1016,1136,1154,1415,1443,617,25,25,888,1210,1093,1201,1522,1424,1181,1211,1229,1265,1282,1286,1156,1188,1113,1144,1216,983,1409,1361,1315,1443,1225,1143,1202,1145,959,1087,1172,1216,1101,1075,1166,1116,1165,1093,1002,1236,1179,966,1180,1294,1140,1088,1003,1255,1161,1066,1189,1015,1114,1514,1310,1278,1252,1202,1318,825,1349,1410,1339,1114,1340,1160,1120,1023,1302,1257,873,1041,1185,1202,893,839,844,1197,979,978,817,912,956,824,891,898,1003,758,881,874,1049,794,838,1004,925,776,848,970,859,853,903,944,813,871,868,980,678,952,807,920,690,892,974,857,822,929,1305,1341,1304,1252,1240,1209,1162,1286,1195,1529,992,1327,1271,1186,1362,1083,1317,1068,1331,1477,1161,1295,1115,1141,1163,1195,1447,1242,1182,1262,1255,1269,1267,1258,1237,1147,1488,1327,1212,1157,1282,1167,1105,1302,1345,1303,1233,1242,1235,1234,1181,1214,1161,1319,1259,1280,1346,1322,1203,1280,1266,1307,1389,1329,1221,1297,1255,1025,1221,1170,1003,1257,1256,1258,1095,1325,1309,1244,1002,1191,1185,1204,1354,1275,1101,1170,1230,1080,1209,1077,1162,1130,1032,1118,891,1043,1049,1013,1125,1218,1524,860,757,1437,1250,1175,1292,1251,1170,1200,1245,1421,1167,1232,1231,1408,1234,1239,1205,1184,1151,1395,1223,1259,1246,1250,1236,1296,1287,1062,1257,1441,1295,1175,1145,1257,1278,1074,1508,1266,1270,1224,1264,1257,1230,1263,1068,1254,1304,1132,1416,1338,1193,1308,1151,1426,1329,1218,1264,1177,1250,1165,1159,1162,1128,1157,1188,1239,1245,1216,1341,1286,1234,1205,1211,1188,1245,1326,1259,1131,1132,1295,1050,1154,1108,1249,697],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_python-sat.data")}Module["addRunDependency"]("datafile_python-sat.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/pycard.so",start:0,end:63852,audio:0},{filename:"/lib/python3.8/site-packages/pysolvers.so",start:63852,end:1053266,audio:0},{filename:"/lib/python3.8/site-packages/pysat/__init__.py",start:1053266,end:1053919,audio:0},{filename:"/lib/python3.8/site-packages/pysat/_fileio.py",start:1053919,end:1059733,audio:0},{filename:"/lib/python3.8/site-packages/pysat/_utils.py",start:1059733,end:1061073,audio:0},{filename:"/lib/python3.8/site-packages/pysat/card.py",start:1061073,end:1089486,audio:0},{filename:"/lib/python3.8/site-packages/pysat/formula.py",start:1089486,end:1156829,audio:0},{filename:"/lib/python3.8/site-packages/pysat/pb.py",start:1156829,end:1171904,audio:0},{filename:"/lib/python3.8/site-packages/pysat/solvers.py",start:1171904,end:1287076,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/__init__.py",start:1287076,end:1287076,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/fm.py",start:1287076,end:1304849,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/genhard.py",start:1304849,end:1323839,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/hitman.py",start:1323839,end:1337235,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/hornify.py",start:1337235,end:1339815,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/lbx.py",start:1339815,end:1360233,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/lsu.py",start:1360233,end:1375495,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/mcsls.py",start:1375495,end:1394993,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/models.py",start:1394993,end:1400280,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/musx.py",start:1400280,end:1410800,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/rc2.py",start:1410800,end:1474508,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/sudoku.py",start:1474508,end:1489379,audio:0},{filename:"/lib/python3.8/site-packages/pysat/examples/usage.py",start:1489379,end:1491562,audio:0},{filename:"/lib/python3.8/site-packages/python_sat-0.1.6.dev6-py3.8.egg-info/PKG-INFO",start:1491562,end:1492839,audio:0},{filename:"/lib/python3.8/site-packages/python_sat-0.1.6.dev6-py3.8.egg-info/SOURCES.txt",start:1492839,end:1496862,audio:0},{filename:"/lib/python3.8/site-packages/python_sat-0.1.6.dev6-py3.8.egg-info/dependency_links.txt",start:1496862,end:1496863,audio:0},{filename:"/lib/python3.8/site-packages/python_sat-0.1.6.dev6-py3.8.egg-info/requires.txt",start:1496863,end:1496920,audio:0},{filename:"/lib/python3.8/site-packages/python_sat-0.1.6.dev6-py3.8.egg-info/top_level.txt",start:1496920,end:1496943,audio:0},{filename:"/bin/fm.py",start:1496943,end:1514719,audio:0},{filename:"/bin/genhard.py",start:1514719,end:1533712,audio:0},{filename:"/bin/lbx.py",start:1533712,end:1554133,audio:0},{filename:"/bin/lsu.py",start:1554133,end:1569398,audio:0},{filename:"/bin/mcsls.py",start:1569398,end:1588899,audio:0},{filename:"/bin/models.py",start:1588899,end:1594189,audio:0},{filename:"/bin/musx.py",start:1594189,end:1604712,audio:0},{filename:"/bin/rc2.py",start:1604712,end:1668423,audio:0}],remote_package_size:996986,package_uuid:"c63642ca-af34-450a-bd35-e60af47a2f41"})})();
import {
    Toast
} from "antd-mobile";
import {
    routerRedux
} from "dva/router";

export default {
    namespace: "spjk",
    state: {
        modal: false,
        modal2:false,
        spurl: '',
        center: 'lng:113.89425,lat:22.485156',
        zoom: 14,
        text:'',
        spxg: [{
                "liveID": "100031680",
                "liveName": "CCT_1",
                "liveStatus": "1",
                "pushAddr": "rtmp://live.simope.com:1935/live/3c2152b371?liveID=100031680&accessCode=5bc39438",
                "releaseAddr": "http://www.wsview.com/yzplayerAction!play2.action?autoPlay=false&playType=uLive&userVideoID=100032037100031987100031986100031933100031932100031918100031907100031906100031807100031805100031804100031803100031773100031772100031716100031682100031681100031680",
                "rtmpReleaseAddr": "rtmp://playrtmp.simope.com:1935/live/3c2152b371?liveID=100031680",
                "hlsReleaseAddr": "http://playhls.simope.com/live/3c2152b371/playlist.m3u8?liveID=100031680",
                "name": "CCT危险品堆场 2#",
                "coordinate": "lng:113.886738,lat:22.473009",
                "terminal": "CCT",
                "order": "1"
            },
            {
                "liveID": "100031681",
                "liveName": "CCT_2",
                "liveStatus": "1",
                "pushAddr": "rtmp://live.simope.com:1935/live/6b35d79f4f?liveID=100031681&accessCode=58f757c5",
                "releaseAddr": "http://www.wsview.com/yzplayerAction!play2.action?autoPlay=false&playType=uLive&userVideoID=100032037100031987100031986100031933100031932100031918100031907100031906100031807100031805100031804100031803100031773100031772100031716100031682100031681",
                "rtmpReleaseAddr": "rtmp://playrtmp.simope.com:1935/live/6b35d79f4f?liveID=100031681",
                "hlsReleaseAddr": "http://playhls.simope.com/live/6b35d79f4f/playlist.m3u8?liveID=100031681",
                "name": "CCT危险品堆场 3#",
                "coordinate": "lng:113.88814,lat:22.470412",
                "terminal": "CCT",
                "order": "2"
            },
            {
                "liveID": "100031932",
                "liveName": "C05",
                "liveStatus": "0",
                "pushAddr": "rtmp://live.simope.com:1935/live/93e24b6338?liveID=100031932&accessCode=36b7597e",
                "releaseAddr": "http://www.wsview.com/yzplayerAction!play2.action?autoPlay=false&playType=uLive&userVideoID=100032037100031987100031986100031933100031932",
                "rtmpReleaseAddr": "rtmp://playrtmp.simope.com:1935/live/93e24b6338?liveID=100031932",
                "hlsReleaseAddr": "http://playhls.simope.com/live/93e24b6338/playlist.m3u8?liveID=100031932",
                "name": "CCT岸桥05#",
                "coordinate": "lng:113.885014,lat:22.474921",
                "terminal": "CCT",
                "order": "3"
            },
            {
                "liveID": "100031933",
                "liveName": "C18",
                "liveStatus": "0",
                "pushAddr": "rtmp://live.simope.com:1935/live/9677e45f0b?liveID=100031933&accessCode=4fa86a07",
                "releaseAddr": "http://www.wsview.com/yzplayerAction!play2.action?autoPlay=false&playType=uLive&userVideoID=100032037100031987100031986100031933",
                "rtmpReleaseAddr": "rtmp://playrtmp.simope.com:1935/live/9677e45f0b?liveID=100031933",
                "hlsReleaseAddr": "http://playhls.simope.com/live/9677e45f0b/playlist.m3u8?liveID=100031933",
                "name": "CCT岸桥18#",
                "coordinate": "lng:113.888921,lat:22.467314",
                "terminal": "CCT",
                "order": "4"
            },
            {
                "liveID": "100031918",
                "liveName": "CFT",
                "liveStatus": "1",
                "pushAddr": "rtmp://live.simope.com:1935/live/3b0ea87d7d?liveID=100031918&accessCode=b1bb0e05",
                "releaseAddr": "http://www.wsview.com/yzplayerAction!play2.action?autoPlay=false&playType=uLive&userVideoID=100032037100031987100031986100031933100031932100031918",
                "rtmpReleaseAddr": "rtmp://playrtmp.simope.com:1935/live/3b0ea87d7d?liveID=100031918",
                "hlsReleaseAddr": "http://playhls.simope.com/live/3b0ea87d7d/playlist.m3u8?liveID=100031918",
                "name": "海星 闸口",
                "coordinate": "lng:113.879264,lat:22.504765",
                "terminal": "CFT",
                "order": "1"
            },
            {
                "liveID": "100032037",
                "liveName": "haixing_1",
                "liveStatus": "1",
                "pushAddr": "rtmp://live.simope.com:1935/live/7cc2842d2d?liveID=100032037&accessCode=05764393",
                "releaseAddr": "http://www.wsview.com/yzplayerAction!play2.action?autoPlay=false&playType=uLive&userVideoID=100032037",
                "rtmpReleaseAddr": "rtmp://playrtmp.simope.com:1935/live/7cc2842d2d?liveID=100032037",
                "hlsReleaseAddr": "http://playhls.simope.com/live/7cc2842d2d/playlist.m3u8?liveID=100032037",
                "name": "海星 堆场",
                "coordinate": "lng:113.877737,lat:22.501176",
                "terminal": "CFT",
                "order": "2"
            },
            {
                "liveID": "100031906",
                "liveName": "CIC_1",
                "liveStatus": "1",
                "pushAddr": "rtmp://live.simope.com:1935/live/e89c592994?liveID=100031906&accessCode=f4aef63d",
                "releaseAddr": "http://www.wsview.com/yzplayerAction!play2.action?autoPlay=false&playType=uLive&userVideoID=100032037100031987100031986100031933100031932100031918100031907100031906",
                "rtmpReleaseAddr": "rtmp://playrtmp.simope.com:1935/live/e89c592994?liveID=100031906",
                "hlsReleaseAddr": "http://playhls.simope.com/live/e89c592994/playlist.m3u8?liveID=100031906",
                "name": "CIC 闸口",
                "coordinate": "lng:113.890996,lat:22.50989",
                "terminal": "CIC",
                "order": "1"
            },
            {
                "liveID": "100031907",
                "liveName": "CIC_2",
                "liveStatus": "1",
                "pushAddr": "rtmp://live.simope.com:1935/live/128f54b93f?liveID=100031907&accessCode=2d76a7eb",
                "releaseAddr": "http://www.wsview.com/yzplayerAction!play2.action?autoPlay=false&playType=uLive&userVideoID=100032037100031987100031986100031933100031932100031918100031907",
                "rtmpReleaseAddr": "rtmp://playrtmp.simope.com:1935/live/128f54b93f?liveID=100031907",
                "hlsReleaseAddr": "http://playhls.simope.com/live/128f54b93f/playlist.m3u8?liveID=100031907",
                "name": "CIC 园区",
                "coordinate": "lng:113.888804,lat:22.510441",
                "terminal": "CIC",
                "order": "2"
            },
            {
                "liveID": "100031772",
                "liveName": "CMBL_1",
                "liveStatus": "1",
                "pushAddr": "rtmp://live.simope.com:1935/live/8c7ecc0f07?liveID=100031772&accessCode=8929be50",
                "releaseAddr": "http://www.wsview.com/yzplayerAction!play2.action?autoPlay=false&playType=uLive&userVideoID=100032037100031987100031986100031933100031932100031918100031907100031906100031807100031805100031804100031803100031773100031772",
                "rtmpReleaseAddr": "rtmp://playrtmp.simope.com:1935/live/8c7ecc0f07?liveID=100031772",
                "hlsReleaseAddr": "http://playhls.simope.com/live/8c7ecc0f07/playlist.m3u8?liveID=100031772",
                "name": "CMBL闸口",
                "coordinate": "lng:113.885822,lat:22.506435",
                "terminal": "CMBL",
                "order": "1"
            },
            {
                "liveID": "100031773",
                "liveName": "CMBL_2",
                "liveStatus": "1",
                "pushAddr": "rtmp://live.simope.com:1935/live/d7bb664a6f?liveID=100031773&accessCode=a118c472",
                "releaseAddr": "http://www.wsview.com/yzplayerAction!play2.action?autoPlay=false&playType=uLive&userVideoID=100032037100031987100031986100031933100031932100031918100031907100031906100031807100031805100031804100031803100031773",
                "rtmpReleaseAddr": "rtmp://playrtmp.simope.com:1935/live/d7bb664a6f?liveID=100031773",
                "hlsReleaseAddr": "http://playhls.simope.com/live/d7bb664a6f/playlist.m3u8?liveID=100031773",
                "name": "CMBL园区",
                "coordinate": "lng:113.884025,lat:22.510558",
                "terminal": "CMBL",
                "order": "2"
            },
            {
                "liveID": "100031682",
                "liveName": "MCT_1",
                "liveStatus": "1",
                "pushAddr": "rtmp://live.simope.com:1935/live/5e85443409?liveID=100031682&accessCode=d6cc1908",
                "releaseAddr": "http://www.wsview.com/yzplayerAction!play2.action?autoPlay=false&playType=uLive&userVideoID=100032037100031987100031986100031933100031932100031918100031907100031906100031807100031805100031804100031803100031773100031772100031716100031682",
                "rtmpReleaseAddr": "rtmp://playrtmp.simope.com:1935/live/5e85443409?liveID=100031682",
                "hlsReleaseAddr": "http://playhls.simope.com/live/5e85443409/playlist.m3u8?liveID=100031682",
                "name": "MCT危险品堆场01",
                "coordinate": "lng:113.884286,lat:22.486166",
                "terminal": "MCT",
                "order": "1"
            },
            {
                "liveID": "100031716",
                "liveName": "MCT_2",
                "liveStatus": "1",
                "pushAddr": "rtmp://live.simope.com:1935/live/d77fa3a7cb?liveID=100031716&accessCode=c77adfdd",
                "releaseAddr": "http://www.wsview.com/yzplayerAction!play2.action?autoPlay=false&playType=uLive&userVideoID=100032037100031987100031986100031933100031932100031918100031907100031906100031807100031805100031804100031803100031773100031772100031716",
                "rtmpReleaseAddr": "rtmp://playrtmp.simope.com:1935/live/d77fa3a7cb?liveID=100031716",
                "hlsReleaseAddr": "http://playhls.simope.com/live/d77fa3a7cb/playlist.m3u8?liveID=100031716",
                "name": "MCT危险品堆场03",
                "coordinate": "lng:113.88425,lat:22.485156",
                "terminal": "MCT",
                "order": "2"
            },
            {
                "liveID": "100031600",
                "liveName": "SCT_1",
                "liveStatus": "1",
                "pushAddr": "rtmp://live.simope.com:1935/live/524622521d?liveID=100031600&accessCode=47d13e24",
                "releaseAddr": "http://www.wsview.com/yzplayerAction!play2.action?autoPlay=false&playType=uLive&userVideoID=100032037100031987100031986100031933100031932100031918100031907100031906100031807100031805100031804100031803100031773100031772100031716100031682100031681100031680100031607100031600",
                "rtmpReleaseAddr": "rtmp://playrtmp.simope.com:1935/live/524622521d?liveID=100031600",
                "hlsReleaseAddr": "http://playhls.simope.com/live/524622521d/playlist.m3u8?liveID=100031600",
                "name": "SCT 1# 2#堆场",
                "coordinate": "lng:113.903671,lat:22.466763",
                "terminal": "SCT",
                "order": "1"
            },
            {
                "liveID": "100031607",
                "liveName": "SCT_2",
                "liveStatus": "1",
                "pushAddr": "rtmp://live.simope.com:1935/live/548c9b76d2?liveID=100031607&accessCode=fac79330",
                "releaseAddr": "http://www.wsview.com/yzplayerAction!play2.action?autoPlay=false&playType=uLive&userVideoID=100032037100031987100031986100031933100031932100031918100031907100031906100031807100031805100031804100031803100031773100031772100031716100031682100031681100031680100031607",
                "rtmpReleaseAddr": "rtmp://playrtmp.simope.com:1935/live/548c9b76d2?liveID=100031607",
                "hlsReleaseAddr": "http://playhls.simope.com/live/548c9b76d2/playlist.m3u8?liveID=100031607",
                "name": "SCT 闸口大道(南) 堆场",
                "coordinate": "lng:113.903582,lat:22.46324",
                "terminal": "SCT",
                "order": "2"
            },
            {
                "liveID": "100031803",
                "liveName": "SCT_A21",
                "liveStatus": "1",
                "pushAddr": "rtmp://live.simope.com:1935/live/b1f59d199b?liveID=100031803&accessCode=b431190f",
                "releaseAddr": "http://www.wsview.com/yzplayerAction!play2.action?autoPlay=false&playType=uLive&userVideoID=100032037100031987100031986100031933100031932100031918100031907100031906100031807100031805100031804100031803",
                "rtmpReleaseAddr": "rtmp://playrtmp.simope.com:1935/live/b1f59d199b?liveID=100031803",
                "hlsReleaseAddr": "http://playhls.simope.com/live/b1f59d199b/playlist.m3u8?liveID=100031803",
                "name": "SCT危险品场1#",
                "coordinate": "lng:113.903743,lat:22.468892",
                "terminal": "SCT",
                "order": "3"
            },
            {
                "liveID": "100031804",
                "liveName": "SCT_A22",
                "liveStatus": "1",
                "pushAddr": "rtmp://live.simope.com:1935/live/c5998a6b83?liveID=100031804&accessCode=8500a471",
                "releaseAddr": "http://www.wsview.com/yzplayerAction!play2.action?autoPlay=false&playType=uLive&userVideoID=100032037100031987100031986100031933100031932100031918100031907100031906100031807100031805100031804",
                "rtmpReleaseAddr": "rtmp://playrtmp.simope.com:1935/live/c5998a6b83?liveID=100031804",
                "hlsReleaseAddr": "http://playhls.simope.com/live/c5998a6b83/playlist.m3u8?liveID=100031804",
                "name": "SCT危险品场2#",
                "coordinate": "lng:113.904228,lat:22.466872",
                "terminal": "SCT",
                "order": "4"
            },
            {
                "liveID": "100031805",
                "liveName": "SCT_A41",
                "liveStatus": "1",
                "pushAddr": "rtmp://live.simope.com:1935/live/620d59edf2?liveID=100031805&accessCode=ba1e0339",
                "releaseAddr": "http://www.wsview.com/yzplayerAction!play2.action?autoPlay=false&playType=uLive&userVideoID=100032037100031987100031986100031933100031932100031918100031907100031906100031807100031805",
                "rtmpReleaseAddr": "rtmp://playrtmp.simope.com:1935/live/620d59edf2?liveID=100031805",
                "hlsReleaseAddr": "http://playhls.simope.com/live/620d59edf2/playlist.m3u8?liveID=100031805",
                "name": "SCT危险品场3#",
                "coordinate": "lng:113.904264,lat:22.469051",
                "terminal": "SCT",
                "order": "5"
            },
            {
                "liveID": "100031807",
                "liveName": "SCT_A42",
                "liveStatus": "1",
                "pushAddr": "rtmp://live.simope.com:1935/live/1787a5906d?liveID=100031807&accessCode=60938ff5",
                "releaseAddr": "http://www.wsview.com/yzplayerAction!play2.action?autoPlay=false&playType=uLive&userVideoID=100032037100031987100031986100031933100031932100031918100031907100031906100031807",
                "rtmpReleaseAddr": "rtmp://playrtmp.simope.com:1935/live/1787a5906d?liveID=100031807",
                "hlsReleaseAddr": "http://playhls.simope.com/live/1787a5906d/playlist.m3u8?liveID=100031807",
                "name": "SCT危险品场4#",
                "coordinate": "lng:113.904956,lat:22.466997",
                "terminal": "SCT",
                "order": "6"
            },
            {
                "liveID": "100031986",
                "liveName": "SKP1",
                "liveStatus": "1",
                "pushAddr": "rtmp://live.simope.com:1935/live/a010a80ef2?liveID=100031986&accessCode=f6b573f9",
                "releaseAddr": "http://www.wsview.com/yzplayerAction!play2.action?autoPlay=false&playType=uLive&userVideoID=100032037100031987100031986",
                "rtmpReleaseAddr": "rtmp://playrtmp.simope.com:1935/live/a010a80ef2?liveID=100031986",
                "hlsReleaseAddr": "http://playhls.simope.com/live/a010a80ef2/playlist.m3u8?liveID=100031986",
                "name": "SKP 5#闸口",
                "coordinate": "lng:113.90987,lat:22.474645",
                "terminal": "SKP",
                "order": "1"
            },
            {
                "liveID": "100031987",
                "liveName": "SKP2",
                "liveStatus": "1",
                "pushAddr": "rtmp://live.simope.com:1935/live/c7316ad30c?liveID=100031987&accessCode=c15c9aab",
                "releaseAddr": "http://www.wsview.com/yzplayerAction!play2.action?autoPlay=false&playType=uLive&userVideoID=100032037100031987",
                "rtmpReleaseAddr": "rtmp://playrtmp.simope.com:1935/live/c7316ad30c?liveID=100031987",
                "hlsReleaseAddr": "http://playhls.simope.com/live/c7316ad30c/playlist.m3u8?liveID=100031987",
                "name": "SKP门机泊位",
                "coordinate": "lng:113.911118,lat:22.469719",
                "terminal": "SKP",
                "order": "2"
            }
        ]
    },
    reducers: {
        showModal(state, {
            payload
        }) {
            let {
                liveID,
                rtmpReleaseAddr,
                hlsReleaseAddr,
                name
            } = payload;
            return {
                ...state,
                modal: true,
                title: name,
                spurl: "http://www.cheluyun.com/javascript/zsg?id=" + liveID + "&rtmp=" + rtmpReleaseAddr + "&hls=" + hlsReleaseAddr
            };
        },
        onClose(state, {
            payload
        }) {
            return {
                ...state,
                modal: false,
                spurl: ""
            };
        },
        onOk(state, {
            payload
        }) {
            let {
                coordinate,name
            } = payload;
            return {
                ...state,
                center: coordinate,
                zoom: 19,
                modal2:false,
                text:name
            }
        },
        onClick(state,{payload}){
           return{
               ...state,
               modal2:true
           }
          },
          onSpClose(state,{payload}){
            return{
                ...state,
                modal2:false
            }
           }

    }
};
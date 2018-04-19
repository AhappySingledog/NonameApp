/** 智能预警model */
import { Toast } from "antd-mobile";
import store from '../index';
import { routerRedux } from 'dva/router';

const { dispatch } = store;

export default {
    namespace: "znyj",
    state: {
        view: [
            {
                /** 预警 */
                title: "预警",
                items: [
                    { num: '0', type : "yj", type : "yj",cla : 'G', src: require("../images/znyj/yj/G1.png") },
                    { num: '0', type : "yj", cla : 'G', src: require("../images/znyj/yj/G2.png") },
                    { num: '0', type : "yj", cla : 'G', src: require("../images/znyj/yj/G3.png") },
                    { num: '0', type : "yj", cla : 'G', src: require("../images/znyj/yj/G4.png") },
                    { num: '0', type : "yj", cla : 'G', src: require("../images/znyj/yj/G5.png") },
                    { num: '0', type : "yj", cla : 'G', src: require("../images/znyj/yj/G6.png") },
                ]
            }, {
                /** 报警 */
                title: "报警",
                items: [
                    { num: '0', type : "bj", cla : 'A', src: require("../images/znyj/yj/A1.png") },
                    { num: '0', type : "bj", cla : 'A', src: require("../images/znyj/yj/A2.png") },
                    { num: '0', type : "bj", cla : 'A', src: require("../images/znyj/yj/A3.png") },
                    { num: '0', type : "bj", cla : 'A', src: require("../images/znyj/yj/A4.png") },
                    { num: '0', type : "bj", cla : 'A', src: require("../images/znyj/yj/A5.png") },
                    { num: '0', type : "bj", cla : 'A', src: require("../images/znyj/yj/A6.png") },
                    { num: '0', type : "bj", cla : 'A', src: require("../images/znyj/yj/A7.png") },
                    { num: '0', type : "bj", cla : 'A', src: require("../images/znyj/yj/A8.png") },
                    { num: '0', type : "bj", cla : 'A', src: require("../images/znyj/yj/A9.png") },
                    { num: '0', type : "bj", cla : 'A', src: require("../images/znyj/yj/A10.png") },
                    { num: '0', type : "bj", cla : 'A', src: require("../images/znyj/yj/A11.png") },
                    { num: '0', type : "bj", cla : 'A', src: require("../images/znyj/yj/A12.png") },
                ]
            }
        ],
        onGridItemClick: (obj, lx, idx) => {
            dispatch(routerRedux.push("/znyj_xx/" + obj.type + "/1"));
        },
        reducers: {

        },
    }
}
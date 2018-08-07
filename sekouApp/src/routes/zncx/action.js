import $ from 'jquery';
import "../../core/netcore";
import { subscribe } from "../../core/arbiter";

let tableName = null;
$.ajax({ dataType: 'json', url: '../../../build/res/tableName.json', async: false, success: (res) => tableName = res });
// $.ajax({ dataType: 'json', url: '../../../res/tableName.json', async: false, success: (res) => tableName = res });
subscribe("tableName_find", ops =>{
    return tableName;
});
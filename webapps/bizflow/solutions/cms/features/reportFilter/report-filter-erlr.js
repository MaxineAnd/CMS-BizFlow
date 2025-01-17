/* global _ angular $ CMS_REPORT_FILTER */
(function () {
    'use strict';

    angular.module('bizflow.app').component('reportFilterErlr', {
        templateUrl: function ($element, $attrs, bizflowContext) {
            var template = 'features/reportFilter/report-filter-erlr.html';
            return template;
        },
        controller: Ctrl
    });

    function Ctrl ($http, $scope, blockUI, bizflowContext, $log, $window, $filter, $location) {
        var vm = this;

        // Attributes
        vm.report = {'name': '', 'description':''};
        vm.group = {};

        // Primitive Options - Not for Selectize
        vm._components = ['By Admin Code', 'Office of the Administrator (OA) Only'];
        vm._includeSubOrgs = ['Yes', 'No'];
        vm._caseStatusList = ['All', 'Drafting Document', 'Manager/Employee Out of Office',
                          'Manager Review/Drafting Document', 'Pending Appeal',
                          'Pending Customer Decision', 'Pending Grievance Decision',
                          'Pending IG Determination', 'Pending Internal Review',
                          'Pending OGC Opinion', 'Pending Oral Presentation',
                          'Pending OSC Investigation', 'Pending Administrative Investigation',
                          'Pending Third Party Decision', 'Researching',
                          'Settlement Discussions', 'Waiting for Information'];
        vm._allCategories = [];
        vm._allFinalActions = [];
        
        // Default Values
        vm.orgSelected = {
            component: '',
            adminCode: '',
            includeSubOrg: 'Yes',
            employeeName: '',
            customerName: '',
            caseType: 'All',
            specialist: 'All',
            caseStatus: 'All',
            caseCategory: 'All',
            caseCategories: [],
            finalAction: 'All',
            finalActions: [],
            status: 'All',
            statusList: [],

            fromDate: null,
            toDate: null
        };
        // Selected Values
        vm.selected = {};

        // Date From - To
        vm.fromDateOpened = false;
        vm.toDateOpened = false;
        vm.dateOptionFrom = { showWeeks: false, maxDate: new Date() };
        vm.dateOptionTo = { showWeeks: false, maxDate: new Date() };

        // Selectize configuration for members in User Group
        vm.membersInGroupConfig = {
            maxItems:1,
            create: false,
            valueField: 'memberid',
            labelField: 'name',
            searchField: ['name']
        };
        // Selectize configuration for simple list
        vm.simpleConfig = {
            maxItems:1,
            create: false,
            valueField: 'value',
            labelField: 'key',
            searchField: ['value']
        };

        vm.caseTypeConfig = {
            maxItems:1,
            create: false,
            valueField: 'value',
            labelField: 'key',
            searchField: ['key'],
            onChange: function(value) {
                vm.resetERLRValues(value);
            }
        };

        vm.tagViewConfig = {
            plugins: ['remove_button'],
            delimiter: ',',
            valueField: 'value',
            labelField: 'key',
            create: false,
            searchField: ['key']
        }

        vm.finalActionConfig = {
            maxItems: 1,
            create: false,
            valueField: 'value',
            labelField: 'key',
            searchField: ['key'],
            onChange: function(value) {
                vm.addFinalAction(value);
            }
        }

        vm.categoryConfig = {
            maxItems: 1,
            create: false,
            valueField: 'value',
            labelField: 'key',
            searchField: ['key'],
            onChange: function(value) {
                vm.addCaseCategory(value);
            }
        }

        vm.statusConfig = {
            maxItems: 1,
            create: false,
            valueField: 'value',
            labelField: 'key',
            searchField: ['value'],
            onChange: function(value) {
                vm.addStatus(value);
            }
        }

        vm.addFinalAction = function(value) {
            if (value == undefined) {
                return;
            }

            if (vm.selected.finalActions == undefined) {
                vm.selected.finalActions = [];
            }

            if (value == 'All') {
                vm.selected.finalActions = [];
                vm.selected.finalAction = 'All';
            } else {
                var index = _.findIndex(vm.selected.finalActions, function(item) {
                    return item == value;
                });
    
                if (index == -1) {
                    vm.selected.finalActions.push(value);
                }

                // vm.selected.finalAction = 'All';
            }
            $scope.$apply();
        }

        vm.removeFinalAction = function(value) {
            console.log("removeFinalAction [" + value + "]");

            if (value == undefined) {
                vm.selected.finalActions = [];
            } else {
                var index = _.findIndex(vm.selected.finalActions, function(item) {
                    return item == value;
                });
    
                if (index != -1) {
                    vm.selected.finalActions.splice(index, 1);
                }
            }

            if (vm.selected.finalActions.length == 0) {
                vm.selected.finalAction = 'All';
            }
        }

        vm.addCaseCategory = function(value) {
            if (value == undefined) {
                return;
            }
            if (vm.selected.caseCategories == undefined) {
                vm.selected.caseCategories = [];
            }

            if (value == 'All') {
                vm.selected.caseCategories = [];
                vm.selected.caseCategory = 'All';
            } else {
                var index = _.findIndex(vm.selected.caseCategories, function(item) {
                    return item == value;
                });
    
                if (index == -1) {
                    vm.selected.caseCategories.push(value);
                }

                // vm.selected.finalAction = 'All';
            }
            $scope.$apply();
        }

        vm.removeCaseCategory = function(value) {
            console.log("removeCategory [" + value + "]");

            if (value == undefined) {
                vm.selected.caseCategories = [];
            } else {
                var index = _.findIndex(vm.selected.caseCategories, function(item) {
                    return item == value;
                });
    
                if (index != -1) {
                    vm.selected.caseCategories.splice(index, 1);
                }
            }

            if (vm.selected.caseCategories.length == 0) {
                vm.selected.caseCategory = 'All';
            }
        }        

        vm.addStatus = function(value) {
            if (value == undefined) {
                return;
            }

            if (vm.selected.statusList == undefined) {
                vm.selected.statusList = [];
            }

            if (value == 'All') {
                vm.selected.statusList = [];
                vm.selected.status = 'All';
            } else {
                var index = _.findIndex(vm.selected.statusList, function(item) {
                    return item == value;
                });
    
                if (index == -1) {
                    vm.selected.statusList.push(value);
                }

                // vm.selected.finalAction = 'All';
            }
            $scope.$apply();
        }

        vm.removeStatus = function(value) {
            console.log("removeStatus [" + value + "]");

            if (value == undefined) {
                vm.selected.statusList = [];
            } else {
                var index = _.findIndex(vm.selected.statusList, function(item) {
                    return item == value;
                });
    
                if (index != -1) {
                    vm.selected.statusList.splice(index, 1);
                }
            }

            if (vm.selected.statusList.length == 0) {
                vm.selected.status = 'All';
            }
        }        

        vm.categories = [];
        vm.finalActions = [];

        vm.resetERLRValues = function(value) {
            if (value == 'All') {
                vm.categories = vm._allCategories;
                vm.finalActions = vm._allFinalActions;
            } else {
                vm.categories = vm.getCategories(value);
                vm.finalActions = vm.getFinalActions(value);
            }

            vm.selected.caseCategory = 'All';
            vm.selected.caseCategories = [];
            vm.selected.finalAction = 'All';
            vm.selected.finalActions = [];
            $scope.$apply();
        }

        // Selectize configuration for simple list
        vm.tagViewConfig = {
            plugins: ['remove_button'],
            delimiter: ',',
            persisit: false,
            valueField: 'value',
            labelField: 'key'
        };


        vm.getSelectizeOptions = function(items) {
            return items.map(function(item) {
                return {key: item, value: item};
            })
        }
        vm.copyItems = function(targets, sources) {
            if (targets) {
                if (targets.length > 0) {
                    targets.length = 0;
                }

                for (var i = 0; i < sources.length; i++) {
                    targets.push(sources[i]);
                }
            }
        }

        vm.adjustBizCoveUI = function () {
            try {
                $('#mainWrapper table.tableTab', window.parent.document).remove(); // Remove BizCove Header
                $('#mainWrapper table.list td', window.parent.document).css({'padding': '0px 0px 0px 0px'}); // Adjust padding
                $('#modalPopupMax0Title', window.parent.parent.document).text(vm.report.name); // Set report name
            } catch (e) {
                $log.error(e);
            }
        };

        vm.initUserGroups = function () {
            var groups = JSON.parse(CMS_REPORT_FILTER.GROUPS).groups;
            CMS_REPORT_FILTER.GROUPS = null;
            vm.group = _.groupBy(groups, 'grpname');
            for (var prop in vm.group) {
                if (vm.group.hasOwnProperty(prop)) {
                    vm.group[prop] = _.sortBy(vm.group[prop], ['name']);
                    vm.group[prop].unshift({grpname: '', grpid: '', memberid: 'All', name: 'All'});
                }
            }
            var amIDCOManagerLeads = _.filter(vm.group['DCO Managers and Leads'], function (item) {
                return item.memberid === CMS_REPORT_FILTER.CURUSERID;
            });
            var amIAdminTeam = _.filter(vm.group['Admin Team'], function (item) {
                return item.memberid === CMS_REPORT_FILTER.CURUSERID;
            });
            if (amIDCOManagerLeads.length > 0 || amIAdminTeam.length > 0) {
                vm._components = ['By Admin Code', 'CMS-wide', 'Office of the Administrator (OA) Only'];
            }
        };

        vm.initERLRTypes = function() {
            var types = JSON.parse(CMS_REPORT_FILTER.ERLRTYPE).erlrType;
            vm.ERLRTypeMap = _.groupBy(types, 'PNAME');
            vm.ERLRTypes = ['All'];

            for (var prop in vm.ERLRTypeMap) {
                if (vm.ERLRTypeMap.hasOwnProperty(prop)) {
                    vm.ERLRTypes.push(prop);
                    vm.ERLRTypeMap[prop] = _.groupBy(vm.ERLRTypeMap[prop], 'TYPE');

                    for (var subProp in vm.ERLRTypeMap[prop]) {
                        if (vm.ERLRTypeMap[prop].hasOwnProperty(subProp)) {
                            vm.ERLRTypeMap[prop][subProp] = _.sortBy(vm.ERLRTypeMap[prop][subProp], ['NAME']);

                            if (subProp == 'ERLRCaseCategory') {
                                vm._allCategories = _.unionBy(vm._allCategories, vm.ERLRTypeMap[prop][subProp], 'NAME');
                            } else if (subProp == 'ERLRCasesCompletedFinalAction') {
                                vm._allFinalActions = _.unionBy(vm._allFinalActions, vm.ERLRTypeMap[prop][subProp], 'NAME');
                            }
                            vm.ERLRTypeMap[prop][subProp].unshift({PNAME: prop, PID: '', ID:'', TYPE: '', NAME: 'All'});
                        }
                    }
                }
            }


            vm._allCategories = _.sortBy(vm._allCategories, ['NAME']).map(function(item) {
                return {key: item.NAME, value: item.NAME};
            });
            vm._allFinalActions = _.sortBy(vm._allFinalActions, ['NAME']).map(function(item) {
                return {key: item.NAME, value: item.NAME};
            });
            vm._allCategories.unshift({key: 'All', value: 'All'});
            vm._allFinalActions.unshift({key: 'All', value: 'All'});

            vm.categories = vm._allCategories;
            vm.finalActions = vm._allFinalActions;
            vm.ERLRTypes.sort();

            // Standards of Conduct Case
            if (CMS_REPORT_FILTER.REPORTNAME == 'CMS Standards of Conduct Case') {
                vm.ERLRTypes = ['Performance Issue'];
                vm.orgSelected.caseType = 'Performance Issue';
            } else if (CMS_REPORT_FILTER.REPORTNAME == 'CMS Trends Report') {
                vm._components = ['CMS-wide'];
                vm.orgSelected.component = 'CMS-wide';
            }
        }

        // Calendar functions & configuration
        vm.changeFromOption = function () {
            vm.dateOptionTo.minDate = vm.selected.fromDate ? vm.selected.fromDate : null;
        };
        vm.changeToOption = function () {
            vm.dateOptionFrom.maxDate = vm.selected.toDate ? vm.selected.toDate : new Date();
        };
        vm.openFromDate = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            vm.toDateOpened = false;
            vm.fromDateOpened = true;
        }
        vm.openToDate = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            vm.toDateOpened = true;
            vm.fromDateOpened = false;
        }

        vm.getDateString = function (when) {
            var month = when.getMonth() + 1;
            month = month < 10 ? ('0' + month) : month;
            var day = when.getDate();
            day = day < 10 ? ('0' + day) : day;
            var year = when.getFullYear();
            var dateString = year + '-' + month + '-' + day;
            return dateString;
        };

        vm.translateMultipleOptions = function(items) {
            var count = items.length;
            var result = "";
            for (var index = 0; index < count; index++) {
                result = result + encodeURI(items[index]);
                if (index < count - 1) {
                    result = result + ","; 
                }
            }
            return result;
        }


        vm.getTargetReportURL = function () {
            var url = '/bizflowadvreport/flow.html?_flowId=viewReportFlow&decorate=no';
            url = url + '&j_memberid=' + CMS_REPORT_FILTER.CURUSERID; // j_memberid
            url = url + '&j_username=' + CMS_REPORT_FILTER.CURLOGINID; // j_username
            url = url + '&reportUnit=' + CMS_REPORT_FILTER.REPORTPATH; // reportUnit
            if (vm.selected.component.length > 0) { // Component
                url = url + '&COMPONENT=' + encodeURI(vm.selected.component);
            }
            if (vm.selected.adminCode.length > 0) { // Admin Code
                url = url + '&ADMIN_CD=' + encodeURI(vm.selected.adminCode.toUpperCase());
            } else {
                url = url + '&ADMIN_CD=~NULL~';
            }
            url = url + '&INC_SUBORG=' + vm.selected.includeSubOrg;
            if (vm.selected.fromDate != null) { // COMP_DATE_FROM
                var from = vm.getDateString(vm.selected.fromDate);
                url = url + '&DATE_RANGE_FROM=' + encodeURI(from);
            } else {
                url = url + '&DATE_RANGE_FROM=2000-01-01';
            }
            if (vm.selected.toDate != null) { // COMP_DATE_TO
                var to = vm.getDateString(vm.selected.toDate);
                url = url + '&DATE_RANGE_TO=' + encodeURI(to);
            } else {
                url = url + '&DATE_RANGE_TO=2050-12-31';
            }
            url = url + '&EMP_NAME=' + encodeURI(vm.selected.employeeName); // Employee Name
            url = url + '&CONTACT_NAME=' + encodeURI(vm.selected.customerName); // Customer Name
            url = url + '&PRIMARY_SPECIALIST=' + vm.selected.specialist; // Primary Specialist
            url = url + '&CASE_TYPE=' + encodeURI(vm.selected.caseType); // caseType
            if (vm.categories.length == 0) {
                url = url + '&CASE_CTGRY=All';
            } else {
                url = url + '&CASE_CTGRY=' + vm.translateMultipleOptions(vm.selected.caseCategories); // Case Categories
            }
            url = url + '&FNL_ACTN=' + vm.translateMultipleOptions(vm.selected.finalActions); // Selecting Official
            url = url + '&CASE_STATUS=' + vm.translateMultipleOptions(vm.selected.statusList); // Case Status
            $log.debug('Report URL [' + url + ']');

            console.log(url);
            return url;
        };

        vm.submit = function () {
            if (vm.selected.component !== 'By Admin Code') {
                vm.selected.adminCode = '';
                vm.selected.includeSubOrg = '';
            }
            var url = vm.getTargetReportURL();

            window.open(url, '_blank');
            setTimeout(function () { vm.close(); }, 0);
        };

        vm.reset = function () {
            vm.selected = _.assign({}, vm.orgSelected);
            vm.selected.caseCategories = [];
            vm.selected.finalActions = [];
            vm.selected.statusList = [];
        };

        vm.close = function () {
            try {
                $('#modalPopupMax0CloseButton', window.parent.parent.document).click();
            } catch (e) {
                $log.info('Cancel button is clicked but failed to dismiss BizCove. ' + e);
            }
        }

        vm.getCategories = function(caseType) {
            console.log("getCategories called");
            var result = [];
            try {
                if (caseType == 'All') {
                    result = vm._allCategories;
                } else {
                    if (vm.ERLRTypeMap[caseType].ERLRCaseCategory) {
                        result = vm.ERLRTypeMap[caseType].ERLRCaseCategory.map(function(item) {
                            return {key: item.NAME, value: item.NAME};
                        });
                    } 
                }
            } catch (e) {

            }
            return result;
        };

        vm.getFinalActions = function(caseType) {
            console.log("getFinalActions called");
            var result = [];
            try {
                if (caseType == 'All') {
                    result = vm._allFinalActions;
                } else {
                    if (vm.ERLRTypeMap[caseType].ERLRCasesCompletedFinalAction) {
                        result = vm.ERLRTypeMap[caseType].ERLRCasesCompletedFinalAction.map(function(item){
                            return {key: item.NAME, value: item.NAME};
                        });
                    }
                }
            } catch (e) {

            }
            return result;
        };

        vm.getNames = function(source, pattern) {
            console.log("getNames [" + source + ', ' + pattern + "]");
            var x2js = new X2JS();

            var url = "/bizflowwebmaker/cms_erlr_service/contactInfo.do?";
            if (source == 'emp') {
                url = url + 'emp=' + pattern;
            } else {
                url = url + 'cust=' + pattern;
            }

            $http.defaults.cache = false;

            return $http({
                method: "POST",
                url: url,
                headers: {
                    "Accept": "application/xml"
                }
            }).then(function success(response) {
                var result = x2js.xml_str2json(response.data);

                var foundUsers = [];
                try {
                    var count = 0;
                    var users;
                    if (source == 'emp') {
                        count = result.eForm.Data.EMPLOYEE_INFO.record.length;
                        users = result.eForm.Data.EMPLOYEE_INFO.record;
                    } else {
                        count = result.eForm.Data.CUSTOMER_INFO.record.length;
                        users = result.eForm.Data.CUSTOMER_INFO.record;
                    }

                    for (var index = 0; index < count; index++) {
                        var first = users[index].FIRST_NAME;
                        var last = users[index].LAST_NAME; 
                        //var email = users[index].EMAIL_ADDR;
                        var label = last + ', ' + first
                        // if (email != null && email.length > 0) {
                        //     label = label + " (" + email + ")";
                        // } 
                        foundUsers.push(label);
                    }
                } catch (e) {
                }
                return foundUsers;
            }, function error(response) {
                return [];
            })
        }                

        vm.$onDestroy = function () {
            $log.info('reportFilter $onDestroy');
        };

        vm.$onInit = function () {
            $log.info('reportFilter $onInit');

            // This should be called first.
            vm.initUserGroups();
            vm.initERLRTypes();
            if (CMS_REPORT_FILTER.REPORTNAME && CMS_REPORT_FILTER.REPORTNAME.length > 0) {
                vm.report.name = CMS_REPORT_FILTER.REPORTNAME;
            }

            $.ajaxSetup({
                cache:false
            });
            
            vm.adjustBizCoveUI();
            vm.selected = _.assign({}, vm.orgSelected);

            $('#reportFilter').attr('aria-busy', 'false');

            vm.components = vm.getSelectizeOptions(vm._components);
            vm.includeSubOrgs = vm.getSelectizeOptions(vm._includeSubOrgs);
            vm.caseTypes = vm.getSelectizeOptions(vm.ERLRTypes);
            vm.caseStatusList = vm.getSelectizeOptions(vm._caseStatusList);
        };        
    }
})();

CREATE OR REPLACE FORCE VIEW VW_ERLR_EMPLOYEE_CASE AS 
  SELECT * 
    FROM ERLR_EMPLOYEE_CASE     
  ORDER BY CASEID;
/
GRANT SELECT ON HHS_CMS_HR.VW_ERLR_EMPLOYEE_CASE TO BIZFLOW;
/

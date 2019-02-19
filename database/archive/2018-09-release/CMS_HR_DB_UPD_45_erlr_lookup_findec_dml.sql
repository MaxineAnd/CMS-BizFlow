
SET DEFINE OFF;


-- DELETE TBL_LOOKUP WHERE TBL_ID BETWEEN 931 AND 944;

INSERT INTO TBL_LOOKUP (TBL_ID,TBL_PARENT_ID,TBL_LTYPE,TBL_NAME,TBL_LABEL,TBL_ACTIVE,TBL_DISP_ORDER,TBL_MANDATORY,TBL_REGION,TBL_CATEGORY,TBL_EFFECTIVE_DT,TBL_EXPIRATION_DT)
VALUES (931,0,'ERLRDemotionFinDecision','DemotionUpheld','Demotion Upheld','1',1,'N',null,'ERLR',TO_DATE('2017-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'),TO_DATE('2050-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'))
;
INSERT INTO TBL_LOOKUP (TBL_ID,TBL_PARENT_ID,TBL_LTYPE,TBL_NAME,TBL_LABEL,TBL_ACTIVE,TBL_DISP_ORDER,TBL_MANDATORY,TBL_REGION,TBL_CATEGORY,TBL_EFFECTIVE_DT,TBL_EXPIRATION_DT)
VALUES (932,0,'ERLRDemotionFinDecision','DemotionRescinded','Demotion Rescinded','1',2,'N',null,'ERLR',TO_DATE('2017-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'),TO_DATE('2050-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'))
;
INSERT INTO TBL_LOOKUP (TBL_ID,TBL_PARENT_ID,TBL_LTYPE,TBL_NAME,TBL_LABEL,TBL_ACTIVE,TBL_DISP_ORDER,TBL_MANDATORY,TBL_REGION,TBL_CATEGORY,TBL_EFFECTIVE_DT,TBL_EXPIRATION_DT)
VALUES (933,0,'ERLRDemotionFinDecision','Suspension','Suspension','1',3,'N',null,'ERLR',TO_DATE('2017-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'),TO_DATE('2050-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'))
;
INSERT INTO TBL_LOOKUP (TBL_ID,TBL_PARENT_ID,TBL_LTYPE,TBL_NAME,TBL_LABEL,TBL_ACTIVE,TBL_DISP_ORDER,TBL_MANDATORY,TBL_REGION,TBL_CATEGORY,TBL_EFFECTIVE_DT,TBL_EXPIRATION_DT)
VALUES (934,0,'ERLRDemotionFinDecision','Reassignment','Reassignment','1',4,'N',null,'ERLR',TO_DATE('2017-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'),TO_DATE('2050-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'))
;
INSERT INTO TBL_LOOKUP (TBL_ID,TBL_PARENT_ID,TBL_LTYPE,TBL_NAME,TBL_LABEL,TBL_ACTIVE,TBL_DISP_ORDER,TBL_MANDATORY,TBL_REGION,TBL_CATEGORY,TBL_EFFECTIVE_DT,TBL_EXPIRATION_DT)
VALUES (935,0,'ERLRDemotionFinDecision','Reprimand','Reprimand','1',5,'N',null,'ERLR',TO_DATE('2017-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'),TO_DATE('2050-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'))
;
INSERT INTO TBL_LOOKUP (TBL_ID,TBL_PARENT_ID,TBL_LTYPE,TBL_NAME,TBL_LABEL,TBL_ACTIVE,TBL_DISP_ORDER,TBL_MANDATORY,TBL_REGION,TBL_CATEGORY,TBL_EFFECTIVE_DT,TBL_EXPIRATION_DT)
VALUES (936,0,'ERLRDemotionFinDecision','WrittenCounseling','Written Counseling','1',6,'N',null,'ERLR',TO_DATE('2017-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'),TO_DATE('2050-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'))
;
INSERT INTO TBL_LOOKUP (TBL_ID,TBL_PARENT_ID,TBL_LTYPE,TBL_NAME,TBL_LABEL,TBL_ACTIVE,TBL_DISP_ORDER,TBL_MANDATORY,TBL_REGION,TBL_CATEGORY,TBL_EFFECTIVE_DT,TBL_EXPIRATION_DT)
VALUES (937,0,'ERLRDemotionFinDecision','NoDecisionIssued','No Decision Issued','1',7,'N',null,'ERLR',TO_DATE('2017-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'),TO_DATE('2050-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'))
;
INSERT INTO TBL_LOOKUP (TBL_ID,TBL_PARENT_ID,TBL_LTYPE,TBL_NAME,TBL_LABEL,TBL_ACTIVE,TBL_DISP_ORDER,TBL_MANDATORY,TBL_REGION,TBL_CATEGORY,TBL_EFFECTIVE_DT,TBL_EXPIRATION_DT)
VALUES (938,0,'ERLRRemovalFinDecision','RemovalUpheld','Removal Upheld','1',1,'N',null,'ERLR',TO_DATE('2017-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'),TO_DATE('2050-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'))
;
INSERT INTO TBL_LOOKUP (TBL_ID,TBL_PARENT_ID,TBL_LTYPE,TBL_NAME,TBL_LABEL,TBL_ACTIVE,TBL_DISP_ORDER,TBL_MANDATORY,TBL_REGION,TBL_CATEGORY,TBL_EFFECTIVE_DT,TBL_EXPIRATION_DT)
VALUES (939,0,'ERLRRemovalFinDecision','RemovalRescinded','Removal Rescinded','1',2,'N',null,'ERLR',TO_DATE('2017-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'),TO_DATE('2050-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'))
;
INSERT INTO TBL_LOOKUP (TBL_ID,TBL_PARENT_ID,TBL_LTYPE,TBL_NAME,TBL_LABEL,TBL_ACTIVE,TBL_DISP_ORDER,TBL_MANDATORY,TBL_REGION,TBL_CATEGORY,TBL_EFFECTIVE_DT,TBL_EXPIRATION_DT)
VALUES (940,0,'ERLRRemovalFinDecision','Reassignment','Reassignment','1',3,'N',null,'ERLR',TO_DATE('2017-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'),TO_DATE('2050-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'))
;
INSERT INTO TBL_LOOKUP (TBL_ID,TBL_PARENT_ID,TBL_LTYPE,TBL_NAME,TBL_LABEL,TBL_ACTIVE,TBL_DISP_ORDER,TBL_MANDATORY,TBL_REGION,TBL_CATEGORY,TBL_EFFECTIVE_DT,TBL_EXPIRATION_DT)
VALUES (941,0,'ERLRRemovalFinDecision','Suspension','Suspension','1',4,'N',null,'ERLR',TO_DATE('2017-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'),TO_DATE('2050-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'))
;
INSERT INTO TBL_LOOKUP (TBL_ID,TBL_PARENT_ID,TBL_LTYPE,TBL_NAME,TBL_LABEL,TBL_ACTIVE,TBL_DISP_ORDER,TBL_MANDATORY,TBL_REGION,TBL_CATEGORY,TBL_EFFECTIVE_DT,TBL_EXPIRATION_DT)
VALUES (942,0,'ERLRRemovalFinDecision','Reprimand','Reprimand','1',5,'N',null,'ERLR',TO_DATE('2017-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'),TO_DATE('2050-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'))
;
INSERT INTO TBL_LOOKUP (TBL_ID,TBL_PARENT_ID,TBL_LTYPE,TBL_NAME,TBL_LABEL,TBL_ACTIVE,TBL_DISP_ORDER,TBL_MANDATORY,TBL_REGION,TBL_CATEGORY,TBL_EFFECTIVE_DT,TBL_EXPIRATION_DT)
VALUES (943,0,'ERLRRemovalFinDecision','WrittenCounseling','Written Counseling','1',6,'N',null,'ERLR',TO_DATE('2017-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'),TO_DATE('2050-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'))
;
INSERT INTO TBL_LOOKUP (TBL_ID,TBL_PARENT_ID,TBL_LTYPE,TBL_NAME,TBL_LABEL,TBL_ACTIVE,TBL_DISP_ORDER,TBL_MANDATORY,TBL_REGION,TBL_CATEGORY,TBL_EFFECTIVE_DT,TBL_EXPIRATION_DT)
VALUES (944,0,'ERLRRemovalFinDecision','NoDecisionIssued','No Decision Issued','1',7,'N',null,'ERLR',TO_DATE('2017-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'),TO_DATE('2050-01-01 00:00:00', 'YYYY-MM-DD HH24:MI:SS'))
;
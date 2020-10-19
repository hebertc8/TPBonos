const routes = require("../controllers/routes.controller");
const oauth = require("../middleware/oauth");

module.exports = (router) => {
  //Login
  router.post("/ccmslogin", (req, res) => {
    oauth.login(req, res);
  });

  //Refresh token
  router.post("/refreshToken", (req, res) => {
    oauth.refresh(req, res);
  });

  //CRUD
  MapSpRouter("/sqlget", "spGetCentral");
  MapSpRouter("/sqlupdate", "spUpdateCentral");
  MapSpRouter("/sqlinsert", "spInsertCentral");
  MapSpRouter("/sqldelete", "spDeleteCentral");
  MapSpRouter("/sqldelete", "spDeleteCentral");
  MapSpRouter("/sqlFillLob", "[Str].[Sp_Lob]"); /*Nombre del SP y ruta que tendrá*/
  MapSpRouter("/sqlFillSubLob", "[Str].[Sp_SubLob]"); /*Nombre del SP y ruta que tendrá*/
  MapSpRouter("/sqlFillRol", "[Str].[Sp_Role]");
  MapSpRouter("/sqlFillPeriod", "[Str].[Sp_Period]");
  MapSpRouter("/sqlFillTenure", "[Str].[Sp_Tenure]");

  MapSpRouter("/sqlFillBonoMax", "[Str].[Sp_Max_Bono]");
  MapSpRouter("/sqlFillGateways", "[Str].[Sp_Gateways]");
  MapSpRouter("/sqlFillThresholds", "[Str].[Sp_Thresholds]");
  MapSpRouter("/sqlFillModifiers", "[Str].[Sp_Modifiers]");
  MapSpRouter("/sqlFillGlobalModifiers", "[Str].[Sp_Global_Modifiers]");
  MapSpRouter("/sqlFillUnitPayment", "[Str].[Sp_Unit_Payment]");

  MapSpRouter("/sqlFillKpiName", "[Str].[Sp_KPI_Name]");
  MapSpRouter("/sqlSaveKpi", "[Str].[Sp_Gateways_Import_data_JSON]");


  function MapSpRouter(route, spName) {
    router.post(route, oauth.oauthOther, (req, res) =>
      routes.CallSp(spName, req, res)
    );
  }
};

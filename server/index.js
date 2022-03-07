
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require("cors");

app.use(cors());
app.use(express.json())
const hostname="10.105.64.12"

const db = mysql.createConnection({
    user: "new_user",
    host: "dgphxutldb001.phx.gapinc.dev",
    password: "password",
    database: "dsot_dev",
});

app.get('/retrieve',(req,res) => {
    db.query('SELECT * FROM DB_Inv_Mysql',(err,result) => {
        if(err){
            console.log(err)
        } else{
            res.send(result)
        }
    })
})
 

app.post('/createMysql',(req,res) => {
    console.log(req.body)
    const rdbms = req.body.rdbms
    const instance_name = req.body.instance_name
    const port = req.body.port
    const db_name = req.body.db_name
    const status = req.body.status
    const distribution = req.body.distribution
    const domain = req.body.domain
    const environment = req.body.environment
    const version = req.body.version
    const ha_role = req.body.ha_role
    const db_size = req.body.db_size
    const db_replication_type = req.body.db_replication_type
    const dba_sme = req.body.dba_sme
    const sn_group = req.body.sn_group
    const compliance = req.body.compliance
    const comments = req.body.comments
    const db_dfo = req.body.db_dfo
    const app_name = req.body.app_name
    const host_name = req.body.host_name

    db.query('INSERT INTO DB_Inv_Mysql(rdbms,instance_name,port,db_name,status,distribution,domain,environment,version,ha_role,db_size,db_replication_type,dba_sme,sn_group,compliance,comments,db_dfo,app_name,host_name) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [rdbms,instance_name,port,db_name,status,distribution,domain,environment,version,ha_role,db_size,db_replication_type,dba_sme,sn_group,compliance,comments,db_dfo,app_name,host_name], 
    (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send("Insererted..")
        }
    });

});

app.delete("/deleteMysql/:id", (req, res) => {
    const id = req.params.id;
    console.log(id)
    db.query("DELETE FROM DB_Inv_Mysql WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.put("/updateMysql",(req,res) => {
    console.log(req.body)
    const id = req.body.id
    const rdbms = req.body.rdbms
    const instance_name = req.body.instance_name
    const port = req.body.port
    const db_name = req.body.db_name
    const status = req.body.status
    const distribution = req.body.distribution
    const domain = req.body.domain
    const environment = req.body.environment
    const version = req.body.version
    const ha_role = req.body.ha_role
    const db_size = req.body.db_size
    const db_replication_type = req.body.db_replication_type
    const dba_sme = req.body.dba_sme
    const sn_group = req.body.sn_group
    const compliance = req.body.compliance
    const comments = req.body.comments
    const db_dfo = req.body.db_dfo
    const app_name = req.body.app_name
    const host_name = req.body.host_name

    db.query('UPDATE DB_Inv_Mysql SET rdbms=?,instance_name=?,port=?,db_name=?,status=?,distribution=?,domain=?,environment=?,version=?,ha_role=?,db_size=?,db_replication_type=?,dba_sme=?,sn_group=?,compliance=?,comments=?,db_dfo=?,app_name=?,host_name=? where id = ? ',[rdbms,instance_name,port,db_name,status,distribution,domain,environment,version,ha_role,db_size,db_replication_type,dba_sme,sn_group,compliance,comments,db_dfo,app_name,host_name,id],(err,result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    });
});




app.get('/retrieveMssql',(req,res) => {
    db.query('SELECT * FROM DB_Inv_Mssql',(err,result) => {
        if(err){
            console.log(err)
        } else{
            res.send(result)
        }
    })
})
app.post('/createMssql',(req,res) => {
    console.log(req.body)
    const rdbms = req.body.rdbms
    const sql_virtual_name = req.body.sql_virtual_name
    const instance_name = req.body.instance_name
    const port = req.body.port
    const db_name = req.body.db_name
    const status = req.body.status
    const domain = req.body.domain
    const environment = req.body.environment
    const version = req.body.version
    const ha_role = req.body.ha_role
    const db_size = req.body.db_size
    const db_replication_type = req.body.db_replication_type
    const dba_sme = req.body.dba_sme
    const sn_group = req.body.sn_group
    const compliance = req.body.compliance
    const comments = req.body.comments
    const db_dfo = req.body.db_dfo
    const app_name = req.body.app_name
    const host_name = req.body.host_name

    db.query('INSERT INTO DB_Inv_Mssql(rdbms,sql_virtual_name,instance_name,port,db_name,status,domain,environment,version,ha_role,db_size,db_replication_type,dba_sme,sn_group,compliance,comments,db_dfo,app_name,host_name) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [rdbms,sql_virtual_name,instance_name,port,db_name,status,domain,environment,version,ha_role,db_size,db_replication_type,dba_sme,sn_group,compliance,comments,db_dfo,app_name,host_name], 
    (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send("Inserted..")
        }
    });

});

app.delete("/deleteMssql/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM DB_Inv_Mssql WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.put("/updateMssql",(req,res) => {
   console.log(req.body)
   const id = req.body.id
    const rdbms = req.body.rdbms
    const sql_virtual_name = req.body.sql_virtual_name
    const instance_name = req.body.instance_name
    const port = req.body.port
    const db_name = req.body.db_name
    const status = req.body.status
    const domain = req.body.domain
    const environment = req.body.environment
    const version = req.body.version
    const ha_role = req.body.ha_role
    const db_size = req.body.db_size
    const db_replication_type = req.body.db_replication_type
    const dba_sme = req.body.dba_sme
    const sn_group = req.body.sn_group
    const compliance = req.body.compliance
    const comments = req.body.comments
    const db_dfo = req.body.db_dfo
    const app_name = req.body.app_name
    const host_name = req.body.host_name
    
    db.query(`UPDATE DB_Inv_Mssql SET rdbms=?,sql_virtual_name=?,instance_name=?,port=?,db_name=?,status=?,domain=?,environment=?,version=?,ha_role=?,db_size=?,db_replication_type=?,dba_sme=?,sn_group=?,compliance=?,comments=?,db_dfo=?,app_name=?,host_name=? where id = ? `,[rdbms,sql_virtual_name,instance_name,port,db_name,status,domain,environment,version,ha_role,db_size,db_replication_type,dba_sme,sn_group,compliance,comments,db_dfo,app_name,host_name,id],(err,result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    });
})


app.get('/retrieveMongo',(req,res) => {
    db.query('SELECT * FROM DB_Inv_Mongo',(err,result) => {
        if(err){
            console.log(err)
        } else{
            res.send(result)
        }
    })
})

app.post('/createMongo',(req,res) => {
    console.log(req.body)
    const rdbms = req.body.rdbms
    const instance_name = req.body.instance_name
    const port = req.body.port
    const db_name = req.body.db_name
    const status = req.body.status
    const distribution = req.body.distribution
    const domain = req.body.domain
    const environment = req.body.environment
    const version = req.body.version
    const ha_role = req.body.ha_role
    const db_size = req.body.db_size
    const db_replication_type = req.body.db_replication_type
    const dba_sme = req.body.dba_sme
    const sn_group = req.body.sn_group
    const compliance = req.body.compliance
    const comments = req.body.comments
    const ops_manager = req.body.ops_manager
    const db_dfo = req.body.db_dfo
    const app_name = req.body.app_name
    const host_name = req.body.host_name

    db.query('INSERT INTO DB_Inv_Mongo(rdbms,instance_name,port,db_name,status,distribution,domain,environment,version,ha_role,db_size,db_replication_type,dba_sme,sn_group,compliance,comments,ops_manager,db_dfo,app_name,host_name) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [rdbms,instance_name,port,db_name,status,distribution,domain,environment,version,ha_role,db_size,db_replication_type,dba_sme,sn_group,compliance,comments,ops_manager,db_dfo,app_name,host_name], 
    (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send("Inserted..")
        }
    });

});

app.delete("/deleteMongo/:id", (req, res) => {
    const id = req.params.id;
    console.log(id)
    db.query("DELETE FROM DB_Inv_Mongo WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.put("/updateMongo",(req,res) => {
   console.log(req.body)
   const id = req.body.id;
    const rdbms = req.body.rdbms
    const instance_name = req.body.instance_name
    const port = req.body.port
    const db_name = req.body.db_name
    const status = req.body.status
    const distribution = req.body.distribution
    const domain = req.body.domain
    const environment = req.body.environment
    const version = req.body.version
    const ha_role = req.body.ha_role
    const db_size = req.body.db_size
    const db_replication_type = req.body.db_replication_type
    const dba_sme = req.body.dba_sme
    const sn_group = req.body.sn_group
    const compliance = req.body.compliance
    const comments = req.body.comments
    const ops_manager = req.body.ops_manager
    const db_dfo = req.body.db_dfo
    const app_name = req.body.app_name
    const host_name = req.body.host_name
    
    db.query(`UPDATE DB_Inv_Mongo SET rdbms=?,instance_name=?,port=?,db_name=?,status=?,distribution=?,domain=?,environment=?,version=?,ha_role=?,db_size=?,db_replication_type=?,dba_sme=?,sn_group=?,compliance=?,comments=?,ops_manager=?,db_dfo=?,app_name=?,host_name=? where id = ? `,[rdbms,instance_name,port,db_name,status,distribution,domain,environment,version,ha_role,db_size,db_replication_type,dba_sme,sn_group,compliance,comments,ops_manager,db_dfo,app_name,host_name,id],(err,result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    });
})



app.get('/retrieveOracle',(req,res) => {
    db.query('SELECT * FROM DB_Inv_Oracle',(err,result) => {
        if(err){
            console.log(err)
        } else{
            res.send(result)
        }
    })
})
app.post('/createOracle',(req,res) => {
    const instance_name = req.body.instance_name
    const db_name = req.body.db_name
    const rdbms = req.body.rdbms
    const status = req.body.status
    const domain = req.body.domain
    const cdb = req.body.cdb
    const environment = req.body.environment
    const version = req.body.version
    const ha_role = req.body.ha_role
    const location = req.body.location
    const oracle_home = req.body.oracle_home
    const port_num = req.body.port_num
    const db_size = req.body.db_size
    const dba_sme = req.body.dba_sme
    const sn_group = req.body.sn_group
    const compliance = req.body.compliance
    const comments = req.body.comments
    const app_name = req.body.app_name
    const host_name = req.body.host_name

    db.query('INSERT INTO DB_Inv_Oracle(instance_name,db_name,rdbms,status,domain,cdb,environment,version,ha_role,location,oracle_home,port_num,db_size,dba_sme,sn_group,compliance,comments,app_name,host_name) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [instance_name,db_name,rdbms,status,domain,cdb,environment,version,ha_role,location,oracle_home,port_num,db_size,dba_sme,sn_group,compliance,comments,app_name,host_name], 
    (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send("Inserted..")
        }
    });

});

app.delete("/deleteOracle/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM DB_Inv_Oracle WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });


app.put("/updateOracle",(req,res) => {
    const id = req.body.id;
    const instance_name = req.body.instance_name
    const db_name = req.body.db_name
    const rdbms = req.body.rdbms
    const status = req.body.status
    const domain = req.body.domain
    const cdb = req.body.cdb
    const environment = req.body.environment
    const version = req.body.version
    const ha_role = req.body.ha_role
    const location = req.body.location
    const oracle_home = req.body.oracle_home
    const port_num = req.body.port_num
    const db_size = req.body.db_size
    const dba_sme = req.body.dba_sme
    const sn_group = req.body.sn_group
    const compliance = req.body.compliance
    const comments = req.body.comments
    const app_name = req.body.app_name
    const host_name = req.body.host_name
    
    db.query(`UPDATE DB_Inv_Oracle SET instance_name=?,db_name=?,rdbms=?,status=?,domain=?,cdb=?,environment=?,version=?,ha_role=?,location=?,oracle_home=?,port_num=?,db_size=?,dba_sme=?,sn_group=?,compliance=?,comments=?,app_name=?,host_name=? where id = ? `,[instance_name,db_name,rdbms,status,domain,cdb,environment,version,ha_role,location,oracle_home,port_num,db_size,dba_sme,sn_group,compliance,comments,app_name,host_name,id],(err,result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    });
})



app.post('/createPostgres',(req,res) => {
    const rdbms = req.body.rdbms
    const instance_name = req.body.instance_name
    const port = req.body.port
    const db_name = req.body.db_name
    const status = req.body.status
    const domain = req.body.domain
    const environment = req.body.environment
    const version = req.body.version
    const ha_role = req.body.ha_role
    const db_size = req.body.db_size
    const db_replication_type = req.body.db_replication_type
    const dba_sme = req.body.dba_sme
    const sn_group = req.body.sn_group
    const compliance = req.body.compliance
    const comments = req.body.comments
    const db_dfo = req.body.db_dfo
    const app_name = req.body.app_name
    const host_name = req.body.host_name
    const distribution = req.body.distribution

    db.query('INSERT INTO DB_Inv_Postgresql(rdbms,instance_name,port,db_name,status,domain,environment,version,ha_role,db_size,db_replication_type,dba_sme,sn_group,compliance,comments,db_dfo,app_name,host_name,distribution) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [rdbms,instance_name,port,db_name,status,domain,environment,version,ha_role,db_size,db_replication_type,dba_sme,sn_group,compliance,comments,db_dfo,app_name,host_name,distribution], 
    (err, result) => {
        if(err){
            console.log(err)
        }else{
            res.send("Inserted..")
        }
    });

});

app.get('/retrievePostgres',(req,res) => {
    db.query('SELECT * FROM DB_Inv_Postgresql',(err,result) => {
        if(err){
            console.log(err)
        } else{
            res.send(result)
        }
    })
})

app.put("/updatePostgres",(req,res) => {
    const id = req.body.id;
    const rdbms = req.body.rdbms
    const instance_name = req.body.instance_name
    const port = req.body.port
    const db_name = req.body.db_name
    const status = req.body.status
    const domain = req.body.domain
    const environment = req.body.environment
    const version = req.body.version
    const ha_role = req.body.ha_role
    const db_size = req.body.db_size
    const db_replication_type = req.body.db_replication_type
    const dba_sme = req.body.dba_sme
    const sn_group = req.body.sn_group
    const compliance = req.body.compliance
    const comments = req.body.comments
    const db_dfo = req.body.db_dfo
    const app_name = req.body.app_name
    const host_name = req.body.host_name
    const distribution = req.body.distribution
    
    db.query(`UPDATE DB_Inv_Postgresql SET rdbms=?,instance_name=?,port=?,db_name=?,status=?,domain=?,environment=?,version=?,ha_role=?,db_size=?,db_replication_type=?,dba_sme=?,sn_group=?,compliance=?,comments=?,db_dfo=?,app_name=?,host_name=?,distribution=? where id = ? `,[rdbms,instance_name,port,db_name,status,domain,environment,version,ha_role,db_size,db_replication_type,dba_sme,sn_group,compliance,comments,db_dfo,app_name,host_name,distribution,id],(err,result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    });
})

app.delete("/deletePostgres/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM DB_Inv_Postgresql WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });


  app.post('/createApp',(req,res) => {
    console.log(req.body)
	const app_name=req.body.app_name
 
    const current_state = req.body.current_state
    const reporting_name = req.body.reporting_name
    const brief_func = req.body.brief_func
    const apm_owner = req.body.apm_owner
    const app_type = req.body.app_type
    const app_tech = req.body.app_tech
    const db_tech = req.body.db_tech
    const no_users = req.body.no_users
    const availability = req.body.availability
    const oper_impact = req.body.oper_impact
    const revenue_impact = req.body.revenue_impact
    const stores_or_custimpact = req.body.stores_or_custimpact
    

    db.query('INSERT INTO App_Inv(app_name,current_state,reporting_name,brief_func,apm_owner,app_type,app_tech,db_tech,no_users,availability,oper_impact,revenue_impact,stores_or_custimpact) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [app_name,current_state,reporting_name,brief_func,apm_owner,app_type,app_tech,db_tech,no_users,availability,oper_impact,revenue_impact,stores_or_custimpact], 
    (err, result) => {
        if(err){
            console.log(err)
    
        }else{
            res.send("Insererted..")
        }
    });

});

app.get('/retrieveApp',(req,res) => {
    db.query('SELECT * FROM App_Inv',(err,result) => {
        if(err){
            console.log(err)
        } else{
            res.send(result)
        }
    })
})

app.put("/updateApp",(req,res) => {
    console.log(req.body)
    const oldapp_name=req.body.oldapp_name
    const newapp_name=req.body.newapp_name
   
    const current_state = req.body.current_state
    const reporting_name = req.body.reporting_name
    const brief_func = req.body.brief_func
    const apm_owner = req.body.apm_owner
    const app_type = req.body.app_type
    const app_tech = req.body.app_tech
    const db_tech = req.body.db_tech
    const no_users = req.body.no_users
    const availability = req.body.availability
    const oper_impact = req.body.oper_impact
    const revenue_impact = req.body.revenue_impact
    const stores_or_custimpact = req.body.stores_or_custimpact
    db.query(`UPDATE App_Inv SET app_name=?,current_state=?,reporting_name=?,brief_func=?,apm_owner=?,app_type=?,app_tech=?,db_tech=?,no_users=?,availability=?,oper_impact=?,revenue_impact=?,stores_or_custimpact=? where app_name = ? `,[newapp_name,current_state,reporting_name,brief_func,apm_owner,app_type,app_tech,db_tech,no_users,availability,oper_impact,revenue_impact,stores_or_custimpact,oldapp_name],(err,result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    });
})

app.delete("/deleteApp/:app_name", (req, res) => {
    const app_name1 = req.params.app_name;
    //console.log(id)
    db.query("DELETE FROM App_Inv WHERE app_name = ?", app_name1, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });



  app.post('/createApp1',(req,res) => {
    console.log(req.body)
	const app_name=req.body.app_name
    //const app_key = req.body.app_key
    const app_vp_owner = req.body.app_vp_owner
    const app_business_type = req.body.app_business_type
    const current_state = req.body.current_state
    const brief_func = req.body.brief_func
  const pt_contact=req.body.pt_contact
   const pt_name=req.body.pt_name
    

    db.query('INSERT INTO App_Inv(app_name,current_state,brief_func,app_vp_owner,app_business_type,pt_contact,pt_name) VALUES(?,?,?,?,?,?,?)',[app_name,current_state,brief_func,app_vp_owner,app_business_type,pt_contact,pt_name],(err, result) => {
        if(err){
            console.log(err)
    
        }else{
            res.send("Insererted..")
        }
    });

});

app.get('/retrieveApp1',(req,res) => {
    db.query('SELECT * FROM App_Inv',(err,result) => {
        if(err){
            console.log(err)
        } else{
            res.send(result)
        }
    })
})

app.put("/updateApp1",(req,res) => {
    console.log(req.body)
    const oldapp_name=req.body.oldapp_name
    const newapp_name=req.body.newapp_name
    //const app_key = req.body.app_key
    const app_vp_owner = req.body.app_vp_owner
    const app_business_type = req.body.app_business_type
    const current_state = req.body.current_state
    const brief_func = req.body.brief_func
    const pt_contact=req.body.pt_contact
    const pt_name=req.body.pt_name
    
    db.query(`UPDATE App_Inv SET app_name=?,current_state=?,brief_func=?,app_vp_owner=?,app_business_type=?,pt_contact=?,pt_name=? where app_name = ? `,[newapp_name,current_state,brief_func,app_vp_owner,app_business_type,pt_contact,pt_name,oldapp_name],(err,result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    });
})

app.delete("/deleteApp1/:app_name", (req, res) => {
    const app_name1 = req.params.app_name;
    //console.log(id)
    db.query("DELETE FROM App_Inv WHERE app_name = ?", app_name1, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });



app.post('/createHost',(req,res) => {
    console.log(req.body)
    const host_name=req.body.host_name
    //const app_key = req.body.app_key
    const tier = req.body.tier
    const compliance = req.body.compliance
    const comments = req.body.comments
    const decommission = req.body.decommission
    const type = req.body.type
    const host_name_2 = req.body.host_name_2
    const os_version = req.body.os_version
    const ha_role = req.body.ha_role
    const validated_date = req.body.validated_date
    const ip_addr = req.body.ip_addr
    const machine_serial = req.body.machine_serial
    const os = req.body.os
    const vm = req.body.vm
    const capped = req.body.capped
    const processor_type = req.body.processor_type
    const cpu_usage_mean = req.body.cpu_usage_mean
    const cpu_usage_max = req.body.cpu_usage_max
    const no_of_cores = req.body.no_of_cores
    const licenses = req.body.licenses
    const v_cpu = req.body.v_cpu
    const core_multiplier = req.body.core_multiplier
    const app = req.body.app
    const nis_uds = req.body.nis_uds
    

    db.query('INSERT INTO Host_Inv(host_name,tier,compliance,comments,decommission,type,host_name_2 ,os_version ,ha_role ,validated_date,ip_addr ,machine_serial,os,vm,capped ,processor_type,cpu_usage_mean,cpu_usage_max,no_of_cores,licenses,v_cpu,core_multiplier,app ,nis_uds) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [host_name,tier,compliance,comments,decommission,type,host_name_2 ,os_version ,ha_role ,validated_date,ip_addr ,machine_serial,os,vm,capped ,processor_type,cpu_usage_mean,cpu_usage_max,no_of_cores,licenses,v_cpu,core_multiplier,app ,nis_uds], 
    (err, result) => {
        if(err){
            console.log(err)
            return err 
        }else{
            res.send("Insererted..")
        }
    });

});

app.get('/retrieveHost',(req,res) => {
    db.query('SELECT * FROM Host_Inv',(err,result) => {
        if(err){
            console.log(err)
        } else{
            res.send(result)
        }
    })
})

app.put("/updateHost",(req,res) => {
    console.log(req.body)
    const newhost_name = req.body.newhost_name
    const oldhost_name=req.body.oldhost_name
    //const app_key = req.body.app_key
    const tier = req.body.tier
    const compliance = req.body.compliance
    const comments = req.body.comments
    const decommission = req.body.decommission
    const type = req.body.type
    const host_name_2 = req.body.host_name_2
    const os_version = req.body.os_version
    const ha_role = req.body.ha_role
    const validated_date = req.body.validated_date
    const ip_addr = req.body.ip_addr
    const machine_serial = req.body.machine_serial
    const os = req.body.os
    const vm = req.body.vm
    const capped = req.body.capped
    const processor_type = req.body.processor_type
    const cpu_usage_mean = req.body.cpu_usage_mean
    const cpu_usage_max = req.body.cpu_usage_max
    const no_of_cores = req.body.no_of_cores
    const licenses = req.body.licenses
    const v_cpu = req.body.v_cpu
    const core_multiplier = req.body.core_multiplier
    const app = req.body.app
    const nis_uds = req.body.nis_uds
    db.query(`UPDATE Host_Inv SET host_name=?,tier=?,compliance=?,comments=?,decommission=?,type=?,host_name_2 =?,os_version =?,ha_role =?,validated_date=?,ip_addr =?,machine_serial=?,os=?,vm=?,capped =?,processor_type=?,cpu_usage_mean=?,cpu_usage_max=?,no_of_cores=?,licenses=?,v_cpu=?,core_multiplier=?,app =?,nis_uds=? where host_name = ?`,[newhost_name,tier,compliance,comments,decommission,type,host_name_2 ,os_version ,ha_role ,validated_date,ip_addr ,machine_serial,os,vm,capped ,processor_type,cpu_usage_mean,cpu_usage_max,no_of_cores,licenses,v_cpu,core_multiplier,app ,nis_uds,oldhost_name],(err,result) => {
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    });
})

app.delete("/deleteHost/:host_name", (req, res) => {
    const host_name1 = req.params.host_name;
    //console.log(id)
    db.query("DELETE FROM Host_Inv WHERE host_name = ?", host_name1, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });



app.listen(8000,hostname,() => {
    console.log("running 8000");
       // console.log(`Server running at http://${hostname}`);
      
});


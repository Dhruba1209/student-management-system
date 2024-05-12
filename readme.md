Setup guide

1. Setup mongodb sharding for distribute database

Sharding setup (locahost):
Config server:

"""
mongod --configsvr --port 28041 --bind_ip localhost --replSet config_repl --dbpath F:\mongodb\shard\configsrv
mongod --configsvr --port 28042 --bind_ip localhost --replSet config_repl --dbpath F:\mongodb\shard\configsrv1
mongod --configsvr --port 28043 --bind_ip localhost --replSet config_repl --dbpath F:\mongo\shard\configsrv2
mongosh --host localhost --port 28041
rsconf = {
\_id: "config_repl",
members: [
{
_id: 0,
host: "localhost:28041"
},
{
_id: 1,
host: "localhost:28042"
},
{
_id: 2,
host: "localhost:28043"
}
]
}
rs.initiate(rsconf)
rs.status()
Shard server:
mongod --shardsvr --port 28081 --bind_ip localhost --replSet shard_repl --dbpath F:\mongodb\shard\shardrep1
mongod --shardsvr --port 28082 --bind_ip localhost --replSet shard_repl --dbpath F:\mongo\shard\shardrep2
mongod --shardsvr --port 28083 --bind_ip localhost --replSet shard_repl --dbpath F:\mongo\shard\shardrep3
mongosh --host localhost --port 28081
rsconf = {
\_id: "shard_repl",
members: [
{
_id: 0,
host: "localhost:28081"
},
{
_id: 1,
host: "localhost:28082"
},
{
_id: 2,
host: "localhost:28083"
}
]
}
rs.initiate(rsconf)
rs.status()
mongod --shardsvr --port 29081 --bind_ip localhost --replSet shard2_repl --dbpath F:\mongo\shard\shard2rep1
mongod --shardsvr --port 29082 --bind_ip localhost --replSet shard2_repl --dbpath F:\mongo\shard\shard2rep2
mongod --shardsvr --port 29083 --bind_ip localhost --replSet shard2_repl --dbpath F:\mongo\shard\shard2rep3
mongosh --host localhost --port 29081
rsconf = {
\_id: "shard2_repl",
members: [
{
_id: 0,
host: "localhost:29081"
},
{
_id: 1,
host: "localhost:29082"
},
{
_id: 2,
host: "localhost:29083"
}
]
}
rs.initiate(rsconf)
rs.status()
MongoS:
mongos --configdb config_repl/localhost:28041,localhost:28042,localhost:28043 --bind_ip localhost

    	Connect to the Sharded Cluster
    		mongosh --host localhost --port 27017

    		sh.addShard( "shard_repl/localhost:28081")
    		sh.addShard( "shard2_repl/localhost:29081")

    		sh.addShard( "shard_repl/localhost:28081,localhost:28082,localhost:28083")
    		sh.addShard( "shard2_repl/localhost:29081,localhost:29082,localhost:29083")

    		sh.enableSharding("db_name")

    		sh.status()

    		sh.shardCollection("db-name.student", { studentId : "hashed" } )
            sh.shardCollection("db-name.department", { departmentId : "hashed" } )
            sh.shardCollection("db-name.course", { courseId : "hashed" } )
            sh.shardCollection("db-name.result", { studentId : "hashed" } )

    		sh.shardCollection("db_name.student", { studentId : 1} )
            sh.shardCollection("db_name.department", { departmentId : 1} )
            sh.shardCollection("db_name.course", { coureseId : 1} )
            sh.shardCollection("db_name.result", { stduentId : 1} )


    		sh.balancerCollectionStatus( <namespace> )    	version 4.4
    		sh.balancerCollectionStatus( "users.zips" )		version 4.4

    		db.student.getShardDistribution()
            db.department.getShardDistribution()
            db.course.getShardDistribution()
            db.result.getShardDistribution()

"""

2. server setup

"""
npm install
"""

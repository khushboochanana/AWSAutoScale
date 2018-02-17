var AWS = require('aws-sdk')
var autoscaling = new AWS.AutoScaling();


exports.handler = (event, context, callback) =>
{
	//Default param group paramsGroup = {
	//	AutoScalingGroupName: "my-auto-scaling-group-1",
	//	MaxSize: 3,
	//	LaunchConfigurationName:"test-demo",
	//	MinSize: 1,
	//	VPCZoneIdentifier: "subnet-1489a859"
	//};
	var paramsGroup = event.paramsGroup
	autoscaling.createAutoScalingGroup(paramsGroup, function (err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else {
			console.log(data, ">>>>>>>>>>>.Group Created");

			callback(null, data);
		}
	});


}

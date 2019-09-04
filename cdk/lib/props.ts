import {CfnMesh} from "@aws-cdk/aws-appmesh";
import {SecurityGroup, Vpc} from "@aws-cdk/aws-ec2";
import {Cluster} from "@aws-cdk/aws-ecs";
import {Role} from "@aws-cdk/aws-iam";
import {LogGroup} from "@aws-cdk/aws-logs";
import {StackProps} from "@aws-cdk/core";

export class WorkshopStackProps implements StackProps {

  stackName: string;
  taskRole: Role;
  taskExecutionRole: Role;
  vpc: Vpc;
  cluster: Cluster;
  internalSecurityGroup: SecurityGroup;
  externalSecurityGroup: SecurityGroup;
  logGroup: LogGroup;
  mesh: CfnMesh;

  constructor(stackName: string) {
    this.stackName = stackName;
  }
}


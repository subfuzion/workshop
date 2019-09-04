#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');

import {WorkshopStackProps} from "../lib/props";
import { WorkshopStack } from '../lib/workshop-stack';

const app = new cdk.App();
let props = new WorkshopStackProps("workshop");
new WorkshopStack(app, "workshop", props);

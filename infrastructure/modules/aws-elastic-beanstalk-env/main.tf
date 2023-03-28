resource "aws_elastic_beanstalk_environment" "eb_app_env" {
  name                = var.eb_app_env_name
  application         = var.eb_app_name
  solution_stack_name = "64bit Amazon Linux 2 v5.5.3 running Node.js 16"

  tags = var.tags

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "IamInstanceProfile"
    value     = "aws-elasticbeanstalk-ec2-role"
  }

    setting {
    namespace = "aws:elasticbeanstalk:environment"
    name      = "LoadBalancerType"
    value     = "application"
  }
}
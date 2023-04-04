terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  profile = "uspec"
  region  = "eu-west-3"
}

provider "aws" {
  profile = "uspec"
  region  = "us-east-1"
  alias   = "useast1"
}

module "frontend_certificate" {
  source = "./modules/aws-acm-certificate"

  domain_name = "${terraform.workspace == "staging" ? "staging." : ""}uspec.click"

  tags = {
    Terraform   = "true"
    Environment = terraform.workspace
  }
}


module "backend_certificate" {
  source = "./modules/aws-acm-certificate"

  domain_name = "${terraform.workspace == "staging" ? "staging." : ""}backend.uspec.click"

  tags = {
    Terraform   = "true"
    Environment = terraform.workspace
  }
}
module "frontend_elastic_beanstalk_app" {
  source = "./modules/aws-elastic-beanstalk-app"

  eb_app_name        = "${terraform.workspace}-frontend"
  eb_app_description = "Frontend application for uspec app, using NextJS."

  tags = {
    Terraform   = "true"
    Environment = terraform.workspace
  }
}

module "frontend_elastic_beanstalk_env" {
  source = "./modules/aws-elastic-beanstalk-env"

  eb_app_env_name = "${terraform.workspace}-frontend"
  eb_app_name     = "${terraform.workspace}-frontend"

  tags = {
    Terraform   = "true"
    Environment = terraform.workspace
  }
}

module "backend_elastic_beanstalk_app" {
  source = "./modules/aws-elastic-beanstalk-app"

  eb_app_name        = "${terraform.workspace}-backend"
  eb_app_description = "Backend application for uspec app, using NestJS."

  tags = {
    Terraform   = "true"
    Environment = terraform.workspace
  }
}

module "backend_elastic_beanstalk_env" {
  source = "./modules/aws-elastic-beanstalk-env"

  eb_app_env_name = "${terraform.workspace}-backend"
  eb_app_name     = "${terraform.workspace}-backend"

  tags = {
    Terraform   = "true"
    Environment = terraform.workspace
  }
}

module "database" {
  source = "./modules/aws-rds-database"

  db_name     = var.db_name
  db_username = var.db_username
  db_password = var.db_password

  tags = {
    Terraform   = "true"
    Environment = terraform.workspace
  }
}

# data "aws_acm_certificate" "frontend" {
#   provider = aws.useast1
#   domain   = "${terraform.workspace == "staging" ? "staging." : ""}uspec.click"
#   statuses = ["ISSUED"]
# }

# data "aws_acm_certificate" "backend" {
#   provider = aws.useast1
#   domain   = "${terraform.workspace == "staging" ? "staging." : ""}backend.uspec.click"
#   statuses = ["ISSUED"]
# }
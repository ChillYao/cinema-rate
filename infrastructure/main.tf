provider "aws" {
  region  = "us-east-1"
  profile = "iamadmin-general"
}

terraform {
  backend "s3" {
    bucket  = "app-cinema-tf-state-tong"
    key     = "app-cinema.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"
  common_tags = {
    Enviroment = terraform.workspace
    Project    = var.project
    ManageBy   = "Terraform"
    Owner      = "Tong Yao"
  }
}

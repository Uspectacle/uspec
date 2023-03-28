resource "aws_db_instance" "database" {
  allocated_storage   = 10
  engine              = "mysql"
  instance_class      = "db.t3.micro"
  db_name             = var.db_name
  username            = var.db_username
  password            = var.db_password
  publicly_accessible = true
  skip_final_snapshot = true
  backup_retention_period = 7

  tags = var.tags
}
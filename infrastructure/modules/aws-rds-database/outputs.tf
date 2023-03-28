# Output variable definitions

output "endpoint" {
  description = "Domain name of the bucket"
  value       = aws_db_instance.database.endpoint
}

output "port" {
  description = "Domain name of the bucket"
  value       = aws_db_instance.database.port
}

# Output variable definitions

output "endpoint_url" {
  description = "Endpoit of the elastic beanstalk instance."
  value       = aws_elastic_beanstalk_environment.eb_app_env.endpoint_url
}
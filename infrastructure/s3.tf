resource "aws_s3_bucket" "cinema_app_s3_bucket" {
  bucket = "${local.prefix}-app"

  tags = local.common_tags
}

resource "aws_s3_bucket_acl" "name" {
  bucket = aws_s3_bucket.cinema_app_s3_bucket.id
  acl    = "private"
}

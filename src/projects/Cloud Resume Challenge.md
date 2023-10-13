---
title: 'Cloud Resume Challenge: Showcasing My Cloud Expertise'
summary: 'AWS-based full-stack serverless project.'
date: '2023-10-12'
technologies:
  - Full-stack Software Development
  - Infrastructure as Code & CI/CD (Terraform, GitHub Actions)
  - Cloud Services (AWS Lambda, API Gateway, DynamoDB, CloudFront, S3)
  - Networking (DNS, CDNs, Cloud Networking)
  - Testing and Monitoring (Cypress, CloudWatch)
url: 'https://resume.pancheliuga.com/'
button: 'My online resume'
image: './src/assets/images/projects/CRC_Architecture_Diagram.png'
alt: 'The Architecture diagram'
lead: ' This project unfolds as an exciting adventure into the cloud ecosystem, providing a detailed account of my experiences in full-stack software development, infrastructure as code, and cloud services.'
---

{% include "partials/toc.njk" %}

## Introduction

[The Cloud Resume Challenge](https://cloudresumechallenge.dev/), an initiative by [Forrest Brazeal](https://forrestbrazeal.com/), is a unique endeavor in the tech world. It's unlike the typical tutorials or how-to guides you might come across. It doesn't hold your hand throughout the process but provides a project spec and sets you free to explore the cloud. The challenge is clear about the expected outcome but gives you enough freedom to find your path. In this article, I'll walk you through my journey in tackling the Cloud Resume Challenge, sharing the skills I acquired, the technology stack I employed, the challenges I faced, and the impact it had on my cloud career.

## Skills Acquired

Participating in the Cloud Resume Challenge was a journey of skill acquisition. The challenge exposed me to various cloud technologies and best practices. Here are some of the skills I gained during this adventure:

- ==Full-stack software development==, which encompassed both the static website and Python components.
- Version control using ==GitHub==, essential for collaborative projects.
- Infrastructure as code (IaC) with ==Terraform==, allowing for efficient and automated resource provisioning.
- Continuous integration and delivery (CI/CD) by connecting ==GitHub Actions==, Terraform, and AWS.
- Exploring various cloud services and diving into serverless architecture, including ==Lambda, API Gateway, DynamoDB, CloudFront, and S3==.
- Understanding application security focusing on ==IAM, S3 policies, CORS, and API authentication/authorization==.
- Navigating networking in the cloud world, including ==DNS, CDN==, and the broader cloud infrastructure.
- Implementing end-to-end testing solutions with ==Cypress== to ensure the reliability and functionality of the application.
- Setting up monitoring solutions with ==CloudWatch== to track the performance and health of the cloud-based infrastructure, including alarms for anomalies and issues.

## Technology Stack

The Cloud Resume Challenge exposed me to a wide-ranging technology stack, incorporating a blend of services and tools to achieve the desired outcome. Some of the core components of my technology stack included:

- **Eleventy Static Site Generator**
  For building the front end of my cloud-hosted resume, I leveraged _**[11ty](https://www.11ty.dev/)**_. I began with a _**[template for an online résumé](https://github.com/maxboeck/resume)**_, which provides excellent features like fully customizable design, semantic HTML, accessibility (WCAG AA compliance), print styles, and h-resume microformat. It also embraced search engine optimization with meta tags and JSON-LD, all while ensuring critical CSS inlining.

- **AWS Services**
  I utilized AWS services to make my resume available to the world. _**AWS S3**_ was the hosting platform for the static production build, while _**CloudFront**_ distributed the content globally. _**Amazon Certificate Manager**_ facilitated the issuance of certificates for my custom DNS domain name. This allowed me to bring my resume under the URL of ==resume.pancheliuga.com.==

- **DynamoDB and Lambda**
  For creating a cloud-based API, I used _**DynamoDB**_ as the database, specifically focusing on tracking website visitors. _**Python Lambda functions**_ managed the application logic, ensuring a smooth and reliable user experience.

- **API Gateway**
  An integral part of my cloud architecture, _**API Gateway**_ served as the endpoint for HTTPS API calls and resource handling, such as tracking visitor counts.

- **Terraform for Infrastructure as Code**
  _**Terraform**_ played a crucial role in automating the deployment of resources. It allowed me to define the entire architecture declaratively, making the process safe and repeatable. The IaC was divided into two modules: web (frontend) and app (backend), simplifying the deployment process. Terraform backends were configured using S3 to maintain the environment state across commits.

- **GitHub Actions for CI/CD**
  The source code for the Cloud Resume Challenge was hosted on _**GitHub**_, enabling open-source collaboration and version control. _**GitHub Actions**_ facilitated continuous integration and deployment. Any changes pushed to the main branch triggered the application of Terraform configurations to the production environment. I also implemented the concept of _**Preview environments**_, which are temporary environments created by CI/CD pipelines for new pull requests. These environments allowed for demonstrating feature changes and ensuring the project's integrity before merging with the main branch and deploying to production.

- **Logging and Monitoring with CloudWatch**
  _**CloudWatch**_ played a vital role in ensuring the health and performance of the application. It enabled me to set up alarms that triggered notifications in case of anomalies, including extended response times or errors in the Lambda function.

- **Testing with Cypress**
  To ensure the reliability and functionality of the application, I implemented _**Cypress**_ for end-to-end testing. This involved creating test cases to cover various scenarios, ensuring that both my website and API behaved as expected.

{% imagePlaceholder "./src/assets/images/projects/CRC_Architecture_Diagram.png", "The Architecture diagram", "The Architecture diagram" %}

## Challenges and Solutions

While the Cloud Resume Challenge was exciting, it had its share of challenges. Here's a glimpse into some of the roadblocks I encountered and how I navigated them:

- **Navigating the AWS Landscape**: AWS is vast, and understanding its numerous services and how they work together requires time and patience. However, a combination of documentation, online resources, and hands-on experimentation helped me master the basics.

- **Infrastructure as Code Complexity**: Writing Terraform code to define the cloud architecture can be intricate. To address this, I divided my IaC into web and app modules, simplifying deployment. Terraform's declarative nature ensured I could safely and consistently recreate the environment as needed.

- **End-to-End Testing**: While the project was well-structured, testing it end-to-end was essential. I implemented Cypress for automated testing, covering a few scenarios to ensure my website and API behaved as expected.

## Results and Impact

Completing the Cloud Resume Challenge was a satisfying achievement. The skills I acquired have had a considerable impact on my cloud career. ==I gained hands-on experience with AWS and honed my full-stack development, IaC, CI/CD, and cloud architecture skills.==

This challenge increased my confidence and enthusiasm to undertake more ambitious cloud-based projects. The continuous integration and deployment workflows and infrastructure as code practices I learned have become valuable assets in my toolkit.

## Afterword

The Cloud Resume Challenge was more than just a technical journey; it was an adventure that expanded my horizons in the cloud world.

I'm excited to continue exploring the limitless possibilities of cloud technology, sharing my experiences, and learning from others who embark on similar journeys. The complete source code for this challenge is available on my [GitHub account](https://github.com/pancheliuga/cloud-resume-challenge), and you can explore my cloud-hosted resume at resume.pancheliuga.com.

## Credits

Thank [Forrest Brazeal](https://forrestbrazeal.com/) for initiating the Cloud Resume Challenge and the online community for their valuable resources and support throughout this journey. I would also like to acknowledge [Max Böck](https://mxb.dev/) for his template for an online résumé, which contributed to developing my cloud-hosted resume.

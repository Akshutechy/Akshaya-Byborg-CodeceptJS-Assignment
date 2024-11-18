#variables
DOCKER_COMPOSE=docker-compose
SERVICE_NAME=codecept-test
REPORT_PORT=8080


#defaut target
help:
	@echo "available commands"
	@echo "make build		Build the docker image"
	@echo "make test		Run the test inside the docker"
	@echo "make report 		Open the allure report at http://localhost:$(REPORT_PORT)"
	@echo "make clean		Cleanup docker container and resources"

#build the docker image
build:
	$(DOCKER_COMPOSE) build

#run test inside docker
test: build
	$(DOCKER_COMPOSE) up --abort-on-container-exit

#open allure report
report:
	@echo "Open the allure report at http://localhost:$(REPORT_PORT)"

#stop and cleanup the docker
clean:
	$(DOCKER_COMPOSE) down --remove-orphans
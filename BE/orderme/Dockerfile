FROM azul/zulu-openjdk:17.0.14-17.56
WORKDIR /app

# 필요한 패키지 설치
#RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# 빌드된 jar 파일 복사
ARG JAR_FILE
COPY ${JAR_FILE} app.jar

EXPOSE 8080

# 작업 디렉토리 권한 설정
RUN chown -R 1001:1001 /app

# 비루트 사용자로 전환
USER 1001

# 헬스체크 설정
#HEALTHCHECK --interval=30s --timeout=3s --start-period=50s --retries=3 \
#  CMD curl -s -f http://localhost:8080/actuator/health/liveness > /dev/null || exit 1

# 애플리케이션 실행
CMD java -jar app.jar

package dev.ishu.movies;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@ComponentScan(basePackages = {"Movie", "Review", "User"})
@EnableMongoRepositories(basePackages = {"Movie", "Review", "User"})
@CrossOrigin(origins = "*")
public class MoviesApplication {

	public static void main(String[] args) {

		SpringApplication.run(MoviesApplication.class, args);

	}

}

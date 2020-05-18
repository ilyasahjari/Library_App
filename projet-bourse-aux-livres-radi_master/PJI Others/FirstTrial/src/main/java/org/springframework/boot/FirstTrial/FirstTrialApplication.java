package org.springframework.boot.FirstTrial;

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication

@ComponentScan(basePackageClasses=MainController.class)
@ComponentScan(basePackageClasses=ParentController.class)
public class FirstTrialApplication {


   
    
	public static void main(String[] args) {
		SpringApplication.run(FirstTrialApplication.class, args);
	}

	public void run(String[] args) throws Exception {
        // Cleanup the adherents table
        //adherentRepository.deleteAll();

        
        
       
        

    }
}

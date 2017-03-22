/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sicaraudiopro.EJB;

import com.sicaraudiopro.model.Tecnico;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author ginna
 */
@Stateless
public class TecnicoFacade extends AbstractFacade<Tecnico> implements TecnicoFacadeLocal {

    @PersistenceContext(unitName = "sicaraudioproPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public TecnicoFacade() {
        super(Tecnico.class);
    }
    
}
